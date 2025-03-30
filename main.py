import os

from flask_bootstrap import Bootstrap5
from flask import Flask, render_template, send_from_directory, url_for
from flask_ckeditor import CKEditor
from forms import ContactForm

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default-secret-key')
bootstrap = Bootstrap5(app)
ckeditor = CKEditor(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/resume')
def resume():
    download_url = url_for('download_file', filename='my_cv.pdf')
    return render_template('resume.html', download_url=download_url)

@app.route('/resume/<filename>')
def download_file(filename):
    return send_from_directory('static', filename, as_attachment=True)

@app.route('/contact', methods=["GET", "POST"])
def contact():
    contact_form = ContactForm()
    return render_template('contact.html', form=contact_form)

@app.route('/privacy-policy')
def privacy_policy():
    return render_template('privacy_policy.html')  # Privacy Policy page

@app.route('/terms-of-service')
def terms_of_service():
    return render_template('terms_of_service.html')

if __name__ == "__main__":
    app.run(debug=True)