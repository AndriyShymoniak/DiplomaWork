# Generated by Django 3.1.7 on 2021-03-09 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rec_api', '0012_auto_20210308_2028'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recognizedobject',
            name='image',
            field=models.CharField(max_length=100),
        ),
    ]