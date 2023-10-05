from django.urls import re_path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = []
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(".*", views.index)]
