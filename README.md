# ingenialo

This repo is the ingenialo ecommerce project. 

We are using django, jquery, vue2 and webpack for assets.

for more information please visit http://www.ingenialo.com/

# installation 

1.  clone this repository:
        git clone https://ingenialo@bitbucket.org/ingenialo/ingenialo.git

2.  Create enviroment variables, in your .env file. maybe a bash files as show:
       
        APP_ENV_SETTINGS="config.settings.local"
        INGENIALO_SECRET_KEY=""
        INGENIALO_DB_NAME="INGENIALO"
        INGENIALO_DB_USER=""
        INGENIALO_DB_PASSWORD=""
        INGENIALO_DB_HOST=""
        INGENIALO_DB_PORT=""
        IS_IN_MAINTENEANCE_MODE=False
        MAINTENEANCE_MODE_END_DATE = "2020/09/01"
       
        
2.  start a python virtual enviroment
        cd ingenialo && python3 -m venv .
        
3.  active virtualenv 
        source bin/activate
        
4.  install python dependencis
        pip install -r requirements/local.txt
        
5.  we need to install npm form some templates package. 

7.  install node dependency with npm==6.13.4 and node==v12.16.1
    cd ingenialo-ui
	npm install
	
# runing the ingenialo web site:

1.  run this command to up the django server:
        python3 manage.py runserve
   
2. run this command to up the frontend:
        cd ingenialo-ui
        npm run dev
