from flask import Flask, render_template, request ,redirect
import sqlite3
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__,static_folder="assets")

@app.route("/")
def index():
    return render_template("/templates/index.html")

@app.route("/register", methods=["POST"])
def register():
    fullname = request.form["fullname"]
    email = request.form["email"]
    ticket = request.form["ticket_type"]

    conn = sqlite3.connect("event.db")
    c = conn.cursor()

    try:
        c.execute("INSERT INTO registerations (fullname, email, ticket_type) VALUE (?,?,?)",
                  (fullname, email, ticket)
        )
        conn.commit()
        send_email(fullname, email, ticket)
        return redirect("/templates/confirm.html")
    
    except sqlite3.IntegrityError:
        return "This email has already registered."
    
    finally:
        conn.close()
    

@app.route("/confirm")
def confirm():
    return render_template("/templates/confirm.html")

def send_email(name, to_email, ticket):
    sender = "youremail@gmail.com"
    password = "APP_PASSWORD"

    msg = MIMEText(
        f"""Hello {name} ,
    You have successfully registered for
    GoodMood Music Festival 2025

    Ticket Type: {ticket}
    """
    )

    msg["Subject"] = "Registeration Confirmation"
    msg["From"] = sender
    msg["To"] = to_email

    with smtplib.SMTP("smtp.gmail.com" ,587) as server:
        server.starttls()
        server.login(sender,password)
        server.send_message(msg)

if __name__ == "__main__":
    app.run(debug=True)