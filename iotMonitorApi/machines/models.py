from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator

class Cpu(models.Model):
    cpu_name = models.CharField(max_length=30, default="cpu_name")
    fan_speed = models.DecimalField(max_digits=6,decimal_places=3, blank=True)
    cpu_temp = models.DecimalField(max_digits=6, decimal_places=3, blank=True)
    gpu_temp = models.DecimalField(max_digits=6, decimal_places=3, blank=True)
    
    def __str__(self):
        return self.cpu_name
    