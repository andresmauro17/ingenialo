# ingenialo

this repo is the ingeialo ecommerce project. 

We are using django an probably react js.

for more information please visit [http://www.ingenialo.com/]
# installation 

1.  clone this repository, type:
        git clone https://ingenialo@bitbucket.org/ingenialo/ingenialo.git
2.  you have to create enviroment variables. maybe un bash files as show:
       
        export INGENIALO_SECRET_KEY=""
        export INGENIALO_DB_NAME=""
        export INGENIALO_DB_USER=""
        export INGENIALO_DB_PASSWORD=""
        export INGENIALO_DB_HOST=""
        export INGENIALO_DB_PORT=""
        
2.  start a python virtual enviroment
        cd ingenialo && python3 -m venv .
3.  active virtualenv 
        source bin/activate
4.  install python dependencis
        pip install requirements.txt
5.  we need to install npm form some templates package. 
6.  install gulp globaly, we need be sudo user for that
        npm install gulp-cli -g
7.  install node dependency
	npm install
	
# runing the ingenialo web site:

1.  run this command:
        python3 manage.py runserver --settings=ingenialo.settings.local
   
   
