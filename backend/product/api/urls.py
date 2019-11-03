from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.conf.urls import url
from django.urls import path,include
from .views import ProductVariantListView,CategoryListView,ProductListingByCategory

app_name = 'api'

urlpatterns = [
    # List all products API
    url(r'^$', ProductVariantListView.as_view(), name='api_productlistview'),
        # List all category API
    url(r'^category/$', CategoryListView.as_view(), name='api_categorylistview'),
    # List products by category API
    url(r'category/(?P<slug>[\w-]+)/$', ProductListingByCategory.as_view(), name='api_productview'),
]
