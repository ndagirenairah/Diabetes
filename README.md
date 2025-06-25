# DiabetesCare+

A smart web app to help diabetic patients and doctors track and manage diabetes.

## Features

### Patient Features
- Register/Login
- Record blood sugar readings
- Set medication reminders
- Track food intake & calories
- Log physical activity
- View history via charts
- Get alerts for abnormal readings

### Doctor Features
- View patient profiles
- View trends & charts
- Add notes & recommendations
- Set follow-up dates

## Tech Stack

- **Frontend:** React, Bootstrap, Chart.js
- **Backend:** Django, Django REST Framework, JWT Auth
- **Database:** SQLite (default, can use PostgreSQL/MySQL)

## Getting Started

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## API Endpoints

- `/api/users/` - User registration
- `/api/token/` - JWT login
- `/api/readings/` - Blood sugar readings
- `/api/medications/` - Medications
- `/api/dietlogs/` - Diet logs
- `/api/exercises/` - Exercises
- `/api/doctornotes/` - Doctor notes

## Screenshots

*(Add screenshots here)*

## License

MIT License

---

*Feel free to modify this template to fit your project!*
