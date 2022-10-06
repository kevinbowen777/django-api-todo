# from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self):
        return self.title
