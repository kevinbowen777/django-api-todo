from django.urls import path

from .views import (
    login,
    signup,
    TodoListCreate,
    TodoRetrieveUpdateDestroy,
    TodoToggleComplete,
)

urlpatterns = [
    path("todos/", TodoListCreate.as_view()),
    path("todos/<int:pk>", TodoRetrieveUpdateDestroy.as_view()),
    path("todos/<int:pk>/complete", TodoToggleComplete.as_view()),
    path("signup/", signup),
    path("login/", login),
]
