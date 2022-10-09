from django.contrib.auth import get_user_model
from django.urls import reverse  # noqa:F401
from rest_framework import status
from rest_framework.test import APITestCase


from .models import Todo


class TodoModelTest(APITestCase):
    @classmethod
    def setUpTestData(cls):
        User = get_user_model()
        cls.user = User.objects.create_user(
            username="testuser",
            password="T3stP@5s123",
        )
        cls.todo = Todo.objects.create(
            title="First Todo", body="A body of text here", user=cls.user
        )

    def test___str__(self):
        assert self.todo.__str__() == self.todo.title
        assert str(self.todo) == self.todo.title

    def test_model_content(self):
        self.assertEqual(self.todo.title, "First Todo")
        self.assertEqual(self.todo.body, "A body of text here")
        self.assertEqual(str(self.todo.user), "testuser")
        self.assertEqual(str(self.todo), "First Todo")

    def test_api_listview_protected_access(self):
        # "Authentication credentials were not provided."
        response = self.client.get("/api/todos/")
        # response = self.client.get(reverse("todo_list"))
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        # self.assertEqual(response.status_code, status.HTTP_200_OK)
        # self.assertEqual(Todo.objects.count(), 1)
        # self.assertContains(response, "Authentication credentials were not provided.")

    """
    def test_api_listview(self):
        self.client.login(
            username="testuser", password="T3stP@5s123",
        )
        response = self.client.get("/api/todos/")
        # self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Todo.objects.count(), 1)
        self.assertContains(response, self.todo)

    def test_api_detailview(self):
        response = self.client.get(
            reverse("todo_detail", kwargs={"pk": self.todo.id}), format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Todo.objects.count(), 1)
        self.assertContains(response, "First Todo")
    """
