# Generated by Django 3.1.7 on 2021-03-08 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rec_api', '0009_auto_20210308_1740'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recognizedobject',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
