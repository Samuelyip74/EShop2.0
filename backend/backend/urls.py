from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.conf.urls import url
from django.urls import path,include


urlpatterns = [
    # API Framework URLs
    url(r'^product/',include('product.urls')),
    url(r'^api/account/', include('account.api.urls'), name='account_api'),
    url(r'^api/product/', include('product.api.urls'), name='product_api'),
    url(r'^app/.*$', include('frontendapp.urls'), name='app'),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
