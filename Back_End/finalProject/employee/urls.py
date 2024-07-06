from django.urls import path
from . import views
from employee.views import EmployeeListCreateAPIView, EmployeeDetailAPIView

urlpatterns = [
    path('employees/', EmployeeListCreateAPIView.as_view(), name='employee-list'),
    path('employees/<int:pk>/', EmployeeDetailAPIView.as_view(), name='employee-detail'),
]