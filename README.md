### django-api-todo

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]()
  [![GitHub Issues](https://img.shields.io/github/issues/kevinbowen777/django-api-todo.svg)](https://github.com/kevinbowen777/django-api-todo/issues)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

 - A basic to-do/task application & API built with Django 4.1 & Django REST
   Framework (DRF) 3.13 with a React frontend

##### Table of Contents
 - [Features](#features)
 - [Installation](#installation)
 - [Testing](#testing)
 - [Application Demo](#application-demo)
 - [Screenshots](#screenshots)
 - [Reporting Bugs](#reporting-bugs)

---
### Features
 - Application
     - Browseable Web API
     - SwaggerUI & ReDoc API documentation
     - User registration with email verification & social(GitHub) login
     - Bootstrap4 & crispy-forms decorations
     - Customizable user profile pages with bio, profile pic, & country flags
 - Dev/testing
     - Basic module testing templates
     - Coverage reports
     - Debug-toolbar available
     - Examples of using Factories & pytest fixtures in account app testing
     - `shell_plus` with IPython via `django-extensions` package
     - Nox testing sessions for latest Python 3.9, 3.10, and 3.11
         - black
         - Sphinx documentaion generation
         - linting
             - flake8
             - flake8-bugbear
             - flake8-import-order
         - safety(python package vulnerability testing)
         - pytest sessions with coverage
     - For additional links to package resources used in this repository, see
       the [Package Index](backend/docs/package_index.md)

### Installation
 - `git clone https://github.com/kevinbowen777/django-api-todo.git`
 - `cd django-api-todo/backend`
 - Local installation
     - `poetry shell`
     - `poetry install`
     - Django backend
         - `python migrate.py migrate`
         - `python migrate.py createsuperuser`
         - `python manage.py runserver`
     - React frontend
         - `cd frontend`
         - `npm start`
 - Docker installation
     - `docker-compose up --build`
     - `docker-compose exec backend python backend/manage.py migrate`
 - URLs:
     - http://127.0.0.1:8000/api
     - http://127.0.0.1:8000/admin
     - http://127.0.0.1:3000/ (React frontend)

---

### Testing
 - `coverage run -m pytest`
 - Nox (includes sessions for black, lint, safety, tests)
     - testing supported for Python 3.9, 3.10, 3.11
     - e.g. `nox`, `nox -rs lint-3.11`, `nox -s tests`

---

### Application Demo
A live application demonstration (Frontend hosted at Netlify, backend at PythonAnywhere)
 - [django-api-todo](https://sweet-tartufo-3d13a6.netlify.app/)

---

### Screenshots

### Home


### Reporting Bugs

   Visit the [Issues page](https://github.com/kevinbowen777/django-api-todo/issues)
      to view currently open bug reports or open a new issue.
