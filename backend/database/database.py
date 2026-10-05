import psycopg2
from psycopg2 import pool


# =========================
# CONNECTION POOL (dùng chung, không tạo mới mỗi request)
# - minconn: số kết nối tối thiểu luôn giữ sẵn
# - maxconn: số kết nối tối đa có thể tạo
# =========================

_pool: pool.ThreadedConnectionPool | None = None


def get_pool() -> pool.ThreadedConnectionPool:
    global _pool
    if _pool is None:
        _pool = pool.ThreadedConnectionPool(
            minconn=1,
            maxconn=10,
            host="localhost",
            port=5432,
            database="hochiminh_db",
            user="postgres",
            password="12345"
        )
    return _pool


def get_connection():
    """Lấy connection từ pool thay vì tạo mới."""
    return get_pool().getconn()


def release_connection(conn):
    """Trả connection về pool để tái sử dụng."""
    get_pool().putconn(conn)


# =========================
# TẠO BẢNG
# =========================

def create_tables():

    connection = get_connection()
    cursor = connection.cursor()

    try:
        # Tạo bảng timeline
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS timeline (
                id INTEGER PRIMARY KEY,
                period TEXT NOT NULL,
                title TEXT NOT NULL,
                description TEXT NOT NULL
            )
        """)

        # Tạo bảng quiz
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

        connection.commit()

    finally:
        cursor.close()
        release_connection(connection)


if __name__ == "__main__":

    create_tables()

    print("PostgreSQL kết nối thành công!")
    print("Đã tạo bảng timeline và quiz!")