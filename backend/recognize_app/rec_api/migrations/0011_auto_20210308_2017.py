# Generated by Django 3.1.7 on 2021-03-08 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rec_api', '0010_auto_20210308_1956'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recognizedobject',
            name='image',
            field=models.FileField(upload_to='media'),
        ),
    ]