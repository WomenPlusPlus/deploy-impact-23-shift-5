from django.core.validators import EmailValidator
from django.db import models


# Create your models here.
class Association(models.Model):
    name = models.CharField(max_length=100)
    website = models.CharField(max_length=100)
    sector = models.CharField(max_length=100)
    short_descr = models.TextField(max_length=200)
    values = models.TextField(max_length=700)
    association_contact_name = models.CharField(max_length=100)
    association_contact_title = models.CharField(max_length=100)
    association_contact_email = models.EmailField(
        validators=[EmailValidator(message='Enter a valid email address.')]
    )
    address = models.CharField(max_length=200)
    linkedin = models.CharField(max_length=200)
    instagram = models.CharField(max_length=200)
