# Generated by Django 3.2 on 2021-06-02 10:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0018_auto_20210602_1512'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='group',
            name='private',
        ),
        migrations.RemoveField(
            model_name='groupmember',
            name='accepted',
        ),
    ]
