# Pull base image
FROM node:18.2.0-alpine

ARG DJANGO_API_TODO

# Set environment variables
ENV DJANGO_API_TODO=${DJANGO_API_TODO}

# System dependencies

# Set work directory
WORKDIR /code/frontend

# Install dependencies
COPY package.json package-lock.json /code/frontend/

# Project initialization:
RUN npm install
RUN npm install axios

# Copy project
COPY . /code/frontend
