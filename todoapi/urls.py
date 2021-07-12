from django.urls import path
from . import views

urlpatterns = [
    path('<int:year>/<int:month>/<int:day>', views.todoList, name="todos"),
    path('todo/<str:pk>', views.todoDetail, name='todo-detail'),
    path('add', views.todoCreate, name='add-todo'),
    path('update/<str:pk>', views.todoUpdate, name='update-todo'),
    path('delete/<str:pk>', views.deleteTodo, name='delete-todo')
]

# NOTE: can't just have <str:pk> as a route, need to
# have something before juu if not caused some error apo kwa add, it was expecting just an id
