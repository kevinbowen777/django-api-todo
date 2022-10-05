from rest_framework import generics, permissions

from .models import Todo
from .serializers import TodoSerializer, TodoToggleCompleteSerializer


class TodoList(generics.ListAPIView):
    serializer_class = TodoSerializer
    permission_class = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user).order_by("-created")


class TodoDetail(generics.RetrieveAPIView):
    serializer_class = TodoSerializer
    permission_class = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user).order_by("-created")


class TodoListCreate(generics.ListCreateAPIView):
    serializer_class = TodoSerializer
    permission_class = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user).order_by("-created")

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TodoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializer
    permission_class = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user)


class TodoToggleComplete(generics.UpdateAPIView):
    serializer_class = TodoToggleCompleteSerializer
    permission_class = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user)

    def perform_update(self, serializer):
        serializer.instance.completed = not (serializer.instance.completed)
        serializer.save()
