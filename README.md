# ingenialo

This repo is the ingeialo ecommerce project. 

We are using django, jquery and gulp for assets.

for more information please visit http://www.ingenialo.com/

# installation 

1.  clone this repository:
        git clone https://ingenialo@bitbucket.org/ingenialo/ingenialo.git
2.  you have to create enviroment variables, in your bashrc or in .env file. maybe un bash files as show:
       
        export INGENIALO_SECRET_KEY=""
        export INGENIALO_DB_NAME=""
        export INGENIALO_DB_USER=""
        export INGENIALO_DB_PASSWORD=""
        export INGENIALO_DB_HOST=""
        export INGENIALO_DB_PORT=""
        
2.  start a python virtual enviroment
        cd ingenialo && python3 -m venv .venv
3.  active virtualenv 
        source bin/activate
4.  install python dependencis
        pip install -r requirements/local.txt
5.  we need to install npm form some templates package. 
6.  install gulp globaly, we need be sudo user for that
        npm install gulp-cli -g
7.  install node dependency
	npm install
	
# runing the ingenialo web site:

1.  run this command if APP_ENV_SETTINGS in .env file is not setted:
        python3 manage.py runserver --settings=ingenialo.settings.local
   
   
