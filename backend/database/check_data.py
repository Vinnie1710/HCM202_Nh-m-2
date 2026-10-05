import sqlite3
from pathlib import Path


# =========================
# ĐƯỜNG DẪN DATABASE
# =========================

BASE_DIR = Path(__file__).resolve().parent
DATABASE_PATH = BASE_DIR / "database.db"


# =========================
# KẾT NỐI
# =========================

connection = sqlite3.connect(DATABASE_PATH)

cursor = connection.cursor()


# =========================
# KIỂM TRA TIMELINE
# =========================

cursor.execute("SELECT * FROM timeline")

timeline_data = cursor.fetchall()

print("===== TIMELINE =====")

for item in timeline_data:
    print(item)


# =========================
# KIỂM TRA QUIZ
# =========================

cursor.execute("SELECT * FROM quiz")

quiz_data = cursor.fetchall()

print("\n===== QUIZ =====")

for item in quiz_data:
    print(item)

# =========================
# SỬA DỮ LIỆU QUIZ
# =========================

cursor.execute("""
    UPDATE quiz
    SET option_d = '2 tháng 9 năm 1969'
    WHERE id = 1
""")

connection.commit()

print("\nĐã sửa dữ liệu quiz!")
connection.close()