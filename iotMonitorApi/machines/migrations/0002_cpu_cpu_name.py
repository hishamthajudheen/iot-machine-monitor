# Generated by Django 4.2.2 on 2023-06-18 08:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machines', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cpu',
            name='cpu_name',
            field=models.CharField(default='cpu_name', max_length=30),
        ),
    ]