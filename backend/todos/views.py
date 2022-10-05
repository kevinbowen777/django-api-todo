from rest_framework import generics

from .models import Todo
from .serializers import TodoSerializer


class TodoList(generics.ListAPIView):
    serializer_class = TodoSerializer

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user).order_by("-created")


class TodoDetail(generics.RetrieveAPIView):
    serializer_class = TodoSerializer

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user).order_by("-created")


class TodoListCreate(generics.ListCreateAPIView):
    serializer_class = TodoSerializer

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user).order_by("-created")

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
