from django import forms

from django.contrib.auth.models import User
from .models import User

class RegisterForm(forms.Form):
    username = forms.CharField(required = True,
                                label = 'nombre de usuario', 
                                min_length = 4, max_length = 50,
                                widget=forms.TextInput(attrs={
                                    'class':'form-control',
                                    'id':'username',
                                    'placeholder':'username'
                                }))
    email = forms.EmailField(required = True,
                                label = 'correo',
                                widget=forms.EmailInput(attrs={
                                    'class':'form-control',
                                    'id':'email',
                                    'placeholder':'example@mail.com',
                                    'data-msg':'por favor ingrese un correo valido',
                                    'aria-label':'Email address',
                                    'data-error-class':'u-has-error',
                                    'data-success-class':'u-has-success'
                                }))
    password = forms.CharField(required = True,
                                label = 'password',
                                widget=forms.PasswordInput(attrs={
                                    'class':'form-control',
                                    'id':'signinSrPassword',
                                    'placeholder':'********',
                                    'aria-label':'********',
                                    'data-msg':'Tu password es invalido, Intenta de nuevo.',
                                    'data-error-class':'u-has-error',
                                    'data-success-class':'u-has-success'
                                }))
    password2 = forms.CharField(label="confirmar password",
                                required = True,
                                widget=forms.PasswordInput(attrs={
                                    'class':'form-control',
                                    'id':'password2',
                                    'placeholder':'********',
                                    'aria-label':'********',
                                    'data-msg':'El password debe ser el mismo.',
                                    'data-error-class':'u-has-error',
                                    'data-success-class':'u-has-success',

                                }))




    def clean_username(self):
        username = self.cleaned_data.get('username')

        if User.objects.filter(username=username).exists():
            raise forms.ValidationError('{username} ya se encuentra en uso!'.format(username = username))
        else:
            return username

    def clean_email(self):
        email = self.cleaned_data.get('email')

        if User.objects.filter(email=email).exists():
            raise forms.ValidationError('{email} ya se encuentra en uso!'.format(email = email))
        else:
            return email
    
    def clean(self):
        # ejecutamos el metodo clean de nuestro padre super osea de form
        cleaned_data = super().clean()

        if cleaned_data.get('password2') != cleaned_data.get('password'):
            self.add_error('password2', 'el password no coincide')#le mandamos el erro al campo pass 2
        
    def save(self):
        return User.objects.create_user(
                self.cleaned_data.get('username'),
                self.cleaned_data.get('email'),
                self.cleaned_data.get('password')
            )