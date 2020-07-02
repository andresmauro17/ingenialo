import os

from django.shortcuts import redirect
from django.urls import reverse
from django.shortcuts import render
from django.contrib import messages
		
class MaintenanceModeMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        
        env_var_str = os.getenv('IS_IN_MAINTENEANCE_MODE')
        if env_var_str == 'True':
            IS_IN_MAINTENEANCE_MODE = True
        else:
            IS_IN_MAINTENEANCE_MODE = False
        
        user_is_staff = request.user.is_staff
        is_admin_view = request.path.startswith('/admin/')
        is_static = request.path.startswith('/static/')

        if IS_IN_MAINTENEANCE_MODE and not user_is_staff and not is_admin_view and not is_static:
            """ 
                Show maintenance view onli if, the os env var is setted to True the user isn't staff, 
                and exclude adminview
            """
            MAINTENEANCE_MODE_END_DATE = os.getenv('MAINTENEANCE_MODE_END_DATE')
            context = {
                "title":"Ingenialo Industrias, explora tu instinto MAKER!",
                "content":"welcome to home page",
                "end_date": '{"endDate":"'+MAINTENEANCE_MODE_END_DATE+'"}'
            }
            return render(request, "maintenance/coming-soon.html", context)
        if IS_IN_MAINTENEANCE_MODE:
            messages.info(request, 'Estas en modo mantenimiento!')
        response = self.get_response(request)
        return response