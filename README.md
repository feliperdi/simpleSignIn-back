# simpleSignIn/up-back

### This is a simple rest api application made using NodeJs.
this is my first application. It's was made to be simple as possible. It's able to perform basic CRUD operations. 

### Status: complete.

### What have I learned from this project ?
The first thing that I noticed was the importance of not dealing with passwords and authentications. I realized that would be better if I delegated those functions and I didn't do because one of the goals of this project was to deal with those stuff myself.


### Technologies that I used:
 + nodeJs 16.11
 + typescript
 + express 4.17
 + bcrypt 5.0
 + Mysql 2.8
 + uuid 8.3
 + jsonwebtoken 8.5
 + knex 
 
 ### End Points
the data format in use is JSON

 ### Post: 
 
 ### "/signIn"
 
 data: {
    "email": "exemple@email.com",
    "password": "12345678",
    "role": "USER"
 }
 
 response: {
   "email": "exemple@email.com",
   "token": "jwt_token_exemple"
 }
 
 ### "/signUp": 
 
 data: {
   "email": "exemple@email.com",
   "password": "12345678",
   "role": "USER"
 }
 
 response: {
   "email": "exemple@email.com",
   "token": "jwt_token_exemple"
 }
 
 ### Delete: 
 
 ### "/"
 
data: {
   "email": "exemple@email.com",
   "password": "12345678"
   "role": "USER"
}
 
response: this endpoint offers no significant response.
 
 ### How to run the application:
 You will need  nodeJs 16.11 and npm to run this application.
 
 1) run npm install
 2) create a new scheme in your mysql
 3) config your .env (local variables). see env_exemple for more information.
 4) run npm start.
