from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task
# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer # traemos la clase creada en serializer
    queryset = Task.objects.all() #traemos todos los datos creados en ese modelo
