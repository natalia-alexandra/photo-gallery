from django.shortcuts import render
from .models import Collection


def home(req):
    collection = Collection.objects
    return render(req, 'index.html', {'collection': collection})
