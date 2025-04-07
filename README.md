# My Portfolio

My personal portfolio website built with Flask to showcase my projects, resume, and provide a contact form. This project uses Flask-Bootstrap for styling, Flask-CKEditor for rich text editing, and includes a resume download feature.

## Live Preset
You can view the live website here : [My Portfolio](https://web-production-5d77.up.railway.app/)
## Features

- **Home Page:** Introduction and overview.
- **Projects Page:** Displays details of ongoing and completed projects.
- **Resume Page:** Option to download my CV.
- **Contact Page:** Contact form powered by Flask-WTForms.
- **Privacy Policy & Terms of Service Pages** for legal information.

## Technologies Used

- Python
- Flask
- Flask-Bootstrap
- Flask-CKEditor
- Jinja2 Templates

## Installation

### Clone the repository

```bash
git clone https://github.com/BTAG16/My-Portfolio.git
cd My-Portfolio
```

### Install dependencies

Create a virtual environment (optional but recommended):

```bash
python -m venv venv
```

Activate the virtual environment:

- **Windows:**

```bash
venv\Scripts\activate
```

- **Mac/Linux:**

```bash
source venv/bin/activate
```

Install required dependencies:

```bash
pip install -r requirements.txt
```

### Run the Application

To run the Flask app, use:

```bash
python app.py
```

This will start the development server, and you can visit `http://127.0.0.1:5000/` in your browser.

## Folder Structure

```
My-Portfolio/
│
├── app.py              # Flask application
├── forms.py            # WTForms for the Contact form
├── requirements.txt    # List of dependencies
├── static/             # Static files (CSS, images, etc.)
│   └── my_cv.pdf       # Resume (PDF)
├── templates/          # HTML templates
│   ├── index.html      # Home page template
│   ├── projects.html   # Projects page template
│   ├── resume.html     # Resume page template
│   ├── contact.html    # Contact page template
│   ├── privacy_policy.html
│   └── terms_of_service.html
└── .env                # Environment variables for secret keys
```

## How to Contribute

1. Fork the repository
2. Clone your fork
3. Create a feature branch (`git checkout -b feature-branch`)
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to your branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License

This project is open-source and available under the [MIT License](LICENSE).
