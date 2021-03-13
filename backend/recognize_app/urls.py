from django.contrib import admin
from django.urls import include, path
from recognize_app.rec_api import views
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^recognizedObject/$', views.recognizerApi),
    url(r'^recognizedObject/([0-9]+)$', views.recognizerApi),
    url(r'^saveFile/$', views.saveFile),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
