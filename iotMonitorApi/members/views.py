from django.shortcuts import render, redirect
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages

def login_user(request):
    if request.method =="POST":
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(request, username=username, email=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request,("Logged in!"))
            return redirect('login')
        else:
            messages.info(request, "Try again!")
            return redirect('members')
            
    else:    
        return render(request, 'authenticate/login.html', {})

def logout_user(request):
    logout(request)
    messages.success(request, ("You were logged out!"))
    return redirect('login')