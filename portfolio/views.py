from django.contrib import messages
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render

from .forms import SignUpForm


@login_required
def home(request):
    profile = {
        "name": "Your Name",
        "role": "Python Django Developer",
        "bio": "I build clean portfolio websites and practical web applications with Django, HTML, CSS, and JavaScript.",
        "email": "hello@example.com",
        "location": "Available for local and remote projects",
    }
    skills = ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"]
    projects = [
        {
            "title": "Personal Portfolio",
            "description": "A responsive portfolio website powered by Django templates and static frontend assets.",
            "url": "#projects",
        },
        {
            "title": "Business Website",
            "description": "A simple company profile site with sections for services, projects, and contact details.",
            "url": "#projects",
        },
        {
            "title": "Contact Form UI",
            "description": "A frontend contact form interaction that works locally and can be connected to Django later.",
            "url": "#contact",
        },
    ]
    return render(request, "portfolio/index.html", {
        "profile": profile,
        "skills": skills,
        "projects": projects,
    })


def signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Account created successfully.")
            return redirect("home")
    else:
        form = SignUpForm()

    return render(request, "portfolio/signup.html", {"form": form})
