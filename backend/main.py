from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from database.database import get_connection, release_connection

app = FastAPI(title="Ho Chi Minh Interactive Website API")

# GZip: nén response trước khi gửi về client
app.add_middleware(GZipMiddleware, minimum_size=500)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Helper: Cache-Control header cho GET (dữ liệu tĩnh, cache 5 phút)
CACHE_HEADERS = {"Cache-Control": "public, max-age=300, stale-while-revalidate=60"}


# =========================
# API TRANG CHỦ
# =========================

@app.get("/")
def root():
    return {"message": "Ho Chi Minh Interactive Website API"}


# =========================
# TIMELINE
# =========================

@app.get("/api/timeline")
def get_timeline():

    connection = get_connection()
    cursor = connection.cursor()

    try:
        cursor.execute("""
            SELECT id, period, title, description
            FROM timeline
            ORDER BY id
        """)

        rows = cursor.fetchall()

        timeline = [
            {"id": r[0], "period": r[1], "title": r[2], "description": r[3]}
            for r in rows
        ]

        return JSONResponse(content=timeline, headers=CACHE_HEADERS)

    finally:
        cursor.close()
        release_connection(connection)


# =========================
# TIMELINE DETAIL
# =========================

@app.get("/api/timeline/{timeline_id}")
def get_timeline_detail(timeline_id: int):

    connection = get_connection()
    cursor = connection.cursor()

    try:
        cursor.execute("""
            SELECT id, period, title, description
            FROM timeline
            WHERE id = %s
        """, (timeline_id,))

        row = cursor.fetchone()

        if row is None:
            raise HTTPException(status_code=404, detail="Không tìm thấy timeline")

        data = {"id": row[0], "period": row[1], "title": row[2], "description": row[3]}
        return JSONResponse(content=data, headers=CACHE_HEADERS)

    finally:
        cursor.close()
        release_connection(connection)


# =========================
# QUIZ MODELS
# =========================

class QuizAnswer(BaseModel):
    question_id: int
    user_answer: int


class QuizSubmit(BaseModel):
    answers: list[QuizAnswer]


# =========================
# GET QUIZ
# =========================

@app.get("/api/quiz")
def get_quiz():

    connection = get_connection()
    cursor = connection.cursor()

    try:
        cursor.execute("""
            SELECT id, question, option_a, option_b, option_c, option_d
            FROM quiz
            ORDER BY id
        """)

        rows = cursor.fetchall()

        questions = [
            {
                "id": r[0],
                "question": r[1],
                "options": [r[2], r[3], r[4], r[5]]
            }
            for r in rows
        ]

        return JSONResponse(content=questions, headers=CACHE_HEADERS)

    finally:
        cursor.close()
        release_connection(connection)


# =========================
# SUBMIT QUIZ
# =========================

@app.post("/api/quiz/submit")
def submit_quiz(data: QuizSubmit):

    if not data.answers:
        raise HTTPException(status_code=400, detail="Không có câu trả lời nào được gửi")

    connection = get_connection()
    cursor = connection.cursor()

    try:
        cursor.execute("SELECT COUNT(*) FROM quiz")
        total_row = cursor.fetchone()
        total = total_row[0] if total_row else 0

        if total == 0:
            return {"score": 0, "total": 0, "message": "Không có câu hỏi trong database", "results": []}

        # Tối ưu: 1 query duy nhất thay vì N queries
        question_ids = [answer.question_id for answer in data.answers]
        placeholders = ",".join(["%s"] * len(question_ids))

        cursor.execute(
            f"SELECT id, correct_answer FROM quiz WHERE id IN ({placeholders})",
            question_ids
        )

        correct_answers_map = {row[0]: row[1] for row in cursor.fetchall()}

        score = 0
        results = []

        for answer in data.answers:
            correct_answer = correct_answers_map.get(answer.question_id)
            if correct_answer is None:
                continue
            is_correct = correct_answer == answer.user_answer
            if is_correct:
                score += 1
            results.append({
                "question_id": answer.question_id,
                "user_answer": answer.user_answer,
                "correct_answer": correct_answer,
                "is_correct": is_correct
            })

        return {
            "score": score,
            "total": total,
            "message": f"Bạn trả lời đúng {score}/{total} câu",
            "results": results
        }

    finally:
        cursor.close()
        release_connection(connection)