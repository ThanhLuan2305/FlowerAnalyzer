from django.urls import path
from . import views
urlpatterns = [
    path('analyzer/', views.predict_flower, name='predict_flower'),
]
