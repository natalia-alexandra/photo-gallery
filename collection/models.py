from django.db import models

# Create your models here.


class Collection(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    images = models.ImageField(upload_to='images/')
    alt = models.CharField(max_length=255)

    def __str__(self):
        return self.title
