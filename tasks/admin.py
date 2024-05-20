from django.contrib import admin
from .models import Task
# añadimos los módelos que queremos manipular
admin.site.register(Task)
