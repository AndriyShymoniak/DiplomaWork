# Generated by Django 3.1.7 on 2021-03-08 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rec_api', '0008_auto_20210306_1658'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recognizedobject',
            name='image',
            field=models.ImageField(upload_to='media'),
        ),
    ]
