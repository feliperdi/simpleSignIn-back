# simpleSignIn/up-back

### This is a simple rest api application made using NodeJs.
this is my first application. It's was made to be simple as possible. It's able to perform basic CRUD operations. 

### status: complete.

### Technologies that I used:
 + nodeJs 16.11
 + express 4.17
 + bcrypt 5.0
 + Mysql 2.8
 + uuid 8.3
 + jsonwebtoken 8.5
 + knex 
 
 ### End Points
the data format in use is JSON

 ### post ('/signIn'): 
 
 
 data: {
   "email": "exemple@email.com",
   "password": "12345678" 
 }
 
 response: {
   "email": "exemple@email.com",
   "token": "jwt_token_exemple"
 }
 
 ### post ('/signUp'): 
 data: {
   "email": "exemple@email.com",
   "password": "12345678" 
 }
 
 response: {
   "email": "exemple@email.com",
   "token": "jwt_token_exemple"
 }
 
 
 ### How to run the application:
 You will need  nodeJs 16.11 and npm to run this application.
 
 1) run npm install
 2) create a new scheme in your mysql
 3) config your .env (local variables). see env_exemple for more information.
 4) run npm start.
