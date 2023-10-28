from django.contrib import admin
from django.urls import include, path, re_path
from . import views
from entryhub_auth import urls as entryhub_auth_urls


urlpatterns = [
    re_path('admin/', admin.site.urls),
    path("/", include(entryhub_auth_urls)),
    re_path(r'^$', views.home),
    re_path('login/', views.login),
    re_path('signup/', views.signup),
    re_path('test_token', views.test_token),
    path('home/', views.home),
]
