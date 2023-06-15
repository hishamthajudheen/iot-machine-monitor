from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator

class Cpu(models.Model):
    fan_speed = models.DecimalField(max_digits=6)
    cpu_temp = models.DecimalField(max_digits=4)
    gpu_temp = models.DecimalField(max_digits=4)
    