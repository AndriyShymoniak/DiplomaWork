# Generated by Django 3.1.7 on 2021-03-06 14:58

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rec_api', '0007_auto_20210306_1650'),
    ]

    operations = [
        migrations.AddField(
            model_name='recognizedobject',
            name='description',
            field=models.CharField(default='empty description', max_length=200),
        ),
        migrations.AddField(
            model_name='recognizedobject',
            name='image',
            field=cloudinary.models.CloudinaryField(default='https://res.cloudinary.com/ddmivk4av/image/upload/v1615040123/diplomawork/not_found.jpg', max_length=255, verbose_name='image'),
        ),
    ]