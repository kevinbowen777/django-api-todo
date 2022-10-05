from django.urls import path

from .views import TodoDetail, TodoList

urlpatterns = [
    path("<int:pk>/", TodoDetail.as_view()),
    path("", TodoList.as_view()),
]
