from django.shortcuts import redirect, render
from django.views.generic import TemplateView


class index(TemplateView):
    template_name='landing/index.html'