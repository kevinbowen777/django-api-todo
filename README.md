### django-api-todo

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]()
  [![GitHub Issues](https://img.shields.io/github/issues/kevinbowen777/django-api-todo.svg)](https://github.com/kevinbowen777/django-api-todo/issues)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

- A demo of basic Django API functionality using the Django Rest Framework(DRF)

---
### Features
 - Uses a React frontend to integrate with DRF backend
 - TBD

### Installation
 - `git clone https://github.com/kevinbowen777/django-api-todo.git`
 - `cd django-api-todo`
 - Local installation
     - `poetry shell`
     - `poetry install`
     - Django backend
         - `python backend/migrate.py migrate`
         - `python backend/migrate.py createsuperuser`
         - `python backend/manage.py runserver`
     - React frontend
         - `cd frontend`
         - `npm start`
 - Docker installation
     - `docker-compose up --build`
     - `docker-compose exec backend python backend/manage.py migrate`
 - URLs:
     - http://127.0.0.1:8000/api
     - http://127.0.0.1:8000/admin
     - http://127.0.0.1:3000/

---
### Reporting Bugs

   Visit the [Issues page](https://github.com/kevinbowen777/django-api-todo/issues)
      to view currently open bug reports or open a new issue.
