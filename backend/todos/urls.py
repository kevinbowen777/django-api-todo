from django.urls import path

from .views import (
    login,
    signup,
    TodoListCreate,
    TodoRetrieveUpdateDestroy,
    TodoToggleComplete,
)

urlpatterns = [
    path("<int:pk>/", TodoRetrieveUpdateDestroy.as_view()),
    path("<int:pk>/complete", TodoToggleComplete.as_view()),
    # path("<int:pk>/", TodoDetail.as_view()),
    # path("", TodoList.as_view()),
    path("", TodoListCreate.as_view()),
    path("signup/", signup),
    path("login/", login),
]
