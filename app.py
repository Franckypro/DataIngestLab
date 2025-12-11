from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Config base de données
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

# Modèle d'exemple
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return f'<User {self.name}>'

# ----- ROUTES -----

@app.route("/")
def index():
    """
    Page d'accueil du cours 'Acquisition et ingestion des données'
    -> rend le template templates/index.html
    """
    return render_template("index.html")

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    print("🔵 app.py est bien exécuté")
    print("🟢 Lancement du serveur Flask...")
    app.run(debug=True)
