# Generated by Django 3.2 on 2021-05-26 17:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0003_group_profile_background'),
    ]

    operations = [
        migrations.RenameField(
            model_name='group',
            old_name='profile_background',
            new_name='cover',
        ),
    ]
