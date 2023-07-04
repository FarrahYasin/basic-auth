# basic-auth
## action link:https://github.com/FarrahYasin/basic-auth/actions
## pull request link: https://github.com/FarrahYasin/basic-auth/pulls
## deployed link: https://basic-auth-r5yr.onrender.com

---

## Dependencies needs to install
npm init -y
npm i dotenv express cors
npm i jest supertest
npm i sequelize
npm i sqlite3
npm i pg

---

## UML
<img width="940" alt="image" src="https://github.com/FarrahYasin/basic-auth/assets/117269271/e9448f9c-6d89-4013-bab5-3366358dbca3">

---

## project features
By this project the user signup in and he can  do signin also
**Signup Route (POST /signup):**
This route is responsible for creating a new user.
It expects the request body to contain a username and password.
The password is hashed using bcrypt before storing it in the database.
The user record is created using the User.create() method from the Sequelize model.
The created user record is then returned as a JSON response with a status of 201 (Created).

**Signin Route (POST /signin):**
This route is used for user authentication and generating a token or granting access to protected resources.
It uses the basicAuthMiddleWare as middleware to perform basic authentication.
If the authentication is successful, the middleware sets req.user to the authenticated user and passes control to the handelSignin function.
The handelSignin function responds with the authenticated user as a JSON response with a status of 200 (OK).

**All Users Route (GET /allUsers):**
This route is used to fetch all users from the system.
It retrieves all user records using the User.findAll() method from the Sequelize model.
The retrieved user records are returned as a JSON response with a status of 200 (OK).
These features provide the basic functionality for user signup, authentication, and retrieval of user data.

---

**this is the endpoint**
/signup -> for signup
/signin -> for signin
/allUsers -> //to get all users in the system

**The code include the following:**
**basicAuthMiddleWare function:** This is a middleware function responsible for basic authentication. It decodes the username and password from the request headers, retrieves the user from the database based on the username, and compares the password using bcrypt. If the authentication is successful, it sets req.user and calls the next() function to pass control to the next middleware.
**User model:** This is the Sequelize model for the User entity. It defines the structure of the User table in the database, including the username and password fields.
**authRouter:** This is an Express router responsible for handling user-related routes such as signup, signin, and getting all users. It uses the User model and the basicAuthMiddleWare function.
**Server setup:** The code includes an Express server setup, including middleware such as CORS and JSON parsing. It also sets up the routes using the authRouter and includes error handling middleware.
**Test cases:** The code includes some test cases using Jest and supertest to test the signup and signin endpoints. It verifies the functionality of the basic authentication middleware and the routes.
test cases:
 POST to /signup to create a new user.
 and
 POST to /signin to login as a user (use basic auth)
