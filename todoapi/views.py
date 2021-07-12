from django.shortcuts import render
from .serializers import TodoSerializer
from .models import Todo
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import datetime

# Combine this post and get, drf docs on views


@api_view(['GET'])
def todoList(request, year, month, day):
    todos = Todo.objects.filter(created__date=datetime.date(year, month, day))
    # todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    # print(serializer.data)
    return Response(serializer.data)


@api_view(['GET'])
def todoDetail(request, pk):
    todos = Todo.objects.get(id=pk)
    serializer = TodoSerializer(todos, many=False)

    return Response(serializer.data)


@api_view(['POST'])
def todoCreate(request):
    serializer = TodoSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def todoUpdate(request, pk):
    print(request)
    todo = Todo.objects.get(id=pk)
    serializer = TodoSerializer(instance=todo, data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data)


@api_view(['DELETE'])
def deleteTodo(request, pk):
    todo = Todo.objects.get(id=pk)
    todo.delete()

    return Response("The todo has been successfully deleted")
