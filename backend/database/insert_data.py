import psycopg2


# =========================
# KẾT NỐI POSTGRESQL
# =========================

connection = psycopg2.connect(
    host="localhost",
    port=5432,
    database="hochiminh_db",
    user="postgres",
    password="12345"
)

cursor = connection.cursor()


# =========================
# DỮ LIỆU TIMELINE
# =========================

timeline = [

    {
        "id": 1,
        "period": "1890",
        "title": "Sinh ra",
        "description": "Chủ tịch Hồ Chí Minh sinh ngày 19 tháng 5 năm 1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An."
    },

    {
        "id": 2,
        "period": "1911",
        "title": "Ra đi tìm đường cứu nước",
        "description": "Ngày 5 tháng 6 năm 1911, Nguyễn Tất Thành rời Bến Nhà Rồng ra đi tìm đường cứu nước."
    },

    {
        "id": 3,
        "period": "1930",
        "title": "Thành lập Đảng Cộng sản Việt Nam",
        "description": "Ngày 3 tháng 2 năm 1930, Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam."
    },

    {
        "id": 4,
        "period": "1941",
        "title": "Trở về Việt Nam",
        "description": "Năm 1941, Nguyễn Ái Quốc trở về Việt Nam sau nhiều năm hoạt động cách mạng ở nước ngoài."
    },

    {
        "id": 5,
        "period": "1945",
        "title": "Tuyên ngôn Độc lập",
        "description": "Ngày 2 tháng 9 năm 1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình."
    },

    {
        "id": 6,
        "period": "1954",
        "title": "Chiến thắng Điện Biên Phủ",
        "description": "Chiến thắng Điện Biên Phủ năm 1954 góp phần kết thúc cuộc kháng chiến chống thực dân Pháp."
    },

    {
        "id": 7,
        "period": "1969",
        "title": "Qua đời",
        "description": "Chủ tịch Hồ Chí Minh qua đời ngày 2 tháng 9 năm 1969 tại Hà Nội."
    }
]


# =========================
# DỮ LIỆU QUIZ
# =========================

quiz = [

    {
        "id": 1,
        "question": "Chủ tịch Hồ Chí Minh sinh ngày nào?",
        "options": [
            "19 tháng 5 năm 1890",
            "2 tháng 9 năm 1945",
            "19 tháng 5 năm 1895",
            "2 tháng 9 năm 1969"
        ],
        "correct_answer": 0
    },

    {
        "id": 2,
        "question": "Tên khai sinh của Chủ tịch Hồ Chí Minh là gì?",
        "options": [
            "Nguyễn Ái Quốc",
            "Nguyễn Sinh Cung",
            "Nguyễn Tất Thành",
            "Văn Ba"
        ],
        "correct_answer": 1
    },

    {
        "id": 3,
        "question": "Ngày 5 tháng 6 năm 1911, Nguyễn Tất Thành rời Việt Nam từ đâu?",
        "options": [
            "Bến Nhà Rồng",
            "Hà Nội",
            "Huế",
            "Nghệ An"
        ],
        "correct_answer": 0
    },

    {
        "id": 4,
        "question": "Ngày 2 tháng 9 năm 1945, Chủ tịch Hồ Chí Minh đọc văn kiện nào?",
        "options": [
            "Lời kêu gọi toàn quốc kháng chiến",
            "Di chúc",
            "Tuyên ngôn Độc lập",
            "Đường Kách mệnh"
        ],
        "correct_answer": 2
    },

    {
        "id": 5,
        "question": "Chủ tịch Hồ Chí Minh qua đời vào năm nào?",
        "options": [
            "1969",
            "1975",
            "1954",
            "1945"
        ],
        "correct_answer": 0
    }
]


# =========================
# TẠO BẢNG
# =========================

cursor.execute("""
    CREATE TABLE IF NOT EXISTS timeline (
        id INTEGER PRIMARY KEY,
        period TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL
    )
""")


cursor.execute("""
    CREATE TABLE IF NOT EXISTS quiz (
        id INTEGER PRIMARY KEY,
        question TEXT NOT NULL,
        option_a TEXT NOT NULL,
        option_b TEXT NOT NULL,
        option_c TEXT NOT NULL,
        option_d TEXT NOT NULL,
        correct_answer INTEGER NOT NULL
    )
""")


# =========================
# XÓA DỮ LIỆU CŨ
# =========================

cursor.execute("DELETE FROM timeline")
cursor.execute("DELETE FROM quiz")


# =========================
# INSERT TIMELINE
# =========================

for item in timeline:

    cursor.execute("""
        INSERT INTO timeline (
            id,
            period,
            title,
            description
        )
        VALUES (%s, %s, %s, %s)
    """, (
        item["id"],
        item["period"],
        item["title"],
        item["description"]
    ))


# =========================
# INSERT QUIZ
# =========================

for item in quiz:

    cursor.execute("""
        INSERT INTO quiz (
            id,
            question,
            option_a,
            option_b,
            option_c,
            option_d,
            correct_answer
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """, (
        item["id"],
        item["question"],
        item["options"][0],
        item["options"][1],
        item["options"][2],
        item["options"][3],
        item["correct_answer"]
    ))


# =========================
# LƯU DATABASE
# =========================

connection.commit()

cursor.close()
connection.close()


print("Đã tạo dữ liệu timeline!")
print("Đã tạo dữ liệu quiz!")
print("Đã lưu tất cả dữ liệu vào PostgreSQL!")