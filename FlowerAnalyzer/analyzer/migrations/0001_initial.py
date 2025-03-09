# Generated by Django 5.1.6 on 2025-03-09 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DataTrained',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file_path', models.CharField(max_length=256)),
                ('daisy', models.FloatField()),
                ('dandelion', models.FloatField()),
                ('rose', models.FloatField()),
                ('sunflower', models.FloatField()),
                ('tulip', models.FloatField()),
                ('result', models.CharField(max_length=256)),
            ],
            options={
                'db_table': 'Data_Trainned',
            },
        ),
    ]
