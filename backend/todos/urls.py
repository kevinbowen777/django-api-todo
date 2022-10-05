from django.urls import path

from .views import TodoDetail, TodoListCreate

urlpatterns = [
    path("<int:pk>/", TodoDetail.as_view()),
    path("", TodoListCreate.as_view()),
]
