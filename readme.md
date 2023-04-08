# Installation
Run the following command to clone the repository
```
git clone https://github.com/alokyadav1/mern-todo-app.git
```
Go to ```frontend``` and ```backend``` directory to install packages
```
cd frontend
npm install
```
```
cd backend
npm install
```
# Configuration
Create ```.env``` file inside ```backend``` directory and copy the following code

```
MONGO_URI=Your mongodb URI
GMAIL_USERNAME=your gmail address 
GMAIL_PASSWORD=password created inside 'App Password' section under google accounts setting
PORT=8000
JWT_SECRET=a random secret key eg. thisisasecretkey
```
# Run the App
Go to ```backend``` and ```frontend``` directory and start the server
```
cd backend
nodemon server
```
```
cd frontend
npm start
```
# Live Preview
Check live preview here [https://todo-app-b96a5.web.app/](https://todo-app-b96a5.web.app/)


