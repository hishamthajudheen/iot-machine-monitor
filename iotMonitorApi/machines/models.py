from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator

class Cpu(models.Model):
    cpu_name = models.CharField(max_length=30, default="cpu_name")
    fan_speed = models.DecimalField(max_digits=6,decimal_places=3)
    cpu_temp = models.DecimalField(max_digits=4, decimal_places=3)
    gpu_temp = models.DecimalField(max_digits=4, decimal_places=3)
    
    def __str__(self):
        return self.cpu_name
    