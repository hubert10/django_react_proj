from django.contrib import admin
from .models import Student


class StudentAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'email', 'document', 'phone', 'registrationDate', 'address')
    search_fields = ['name', 'email', 'address']
    list_per_page = 50
    list_filter = ['registrationDate']

admin.site.register(Student, StudentAdmin)
