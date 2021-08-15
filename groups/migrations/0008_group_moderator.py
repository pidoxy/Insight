# Generated by Django 3.2 on 2021-05-29 10:22

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('groups', '0007_alter_group_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='group',
            name='moderator',
            field=models.ManyToManyField(null=True, related_name='moderator', to=settings.AUTH_USER_MODEL),
        ),
    ]
