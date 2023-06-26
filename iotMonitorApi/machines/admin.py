from django.contrib import admin
from .models import Cpu

# Register your models here.
#admin.site.register(Cpu)

@admin.register(Cpu)
class CpuAdmin(admin.ModelAdmin):
    list_display = ('cpu_name', 'fan_speed', 'cpu_temp', 'gpu_temp')
    ordering = ('cpu_name',)
    search_fields = ('name',)
