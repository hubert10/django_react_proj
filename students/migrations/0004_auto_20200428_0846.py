# Generated by Django 3.0.5 on 2020-04-28 08:46

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0003_student_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='name',
            field=models.CharField(max_length=240, validators=[django.core.validators.MinLengthValidator(10)], verbose_name='Name'),
        ),
    ]