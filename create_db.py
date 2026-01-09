import sqlite3

conn = sqlite3.connect("event.db")
c = conn.cursor()

c.execute("""
          CREATE TABLE IF NOT EXISTS registerations (
          id INTEGER PRIMARY KEY AUTOINCEMENT,
          fullname TEXT,
          email TEXT UNIQUE
          ticket_type TEXT,
          create_at DATETIME DEFAULT CURRENT_TIMESTAMP)
""")

conn.commit()
conn.close
