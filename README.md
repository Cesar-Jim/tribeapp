# tribeapp

Find it live at: [tribeapp](https://cesar-jimenez-tribeapp.herokuapp.com/)



![tribeapp](https://www.dropbox.com/s/3nm9h9s7pn7b63x/tribeapp.JPG?raw=true "tribeapp screenshot")

## Description

tribeapp is a full-stack web application based on Node.js. It gets its inspiration from native american tents, 
better known as Tipis. Each Tipi is conceptualized to act as a chat room where people can gather to discuss about
specific, well-scoped topics. 

The main goal of the application is to connect people and have them create Tipis so that they can precisely define 
what is about to be discussed inside each Tipi. Everyone is welcome to use the app and read all its contents,
however, only registered users can create, edit and delete Tipis at will.

---
## Main Technologies 
(in alphabetical order)

#### Development:

* ejs@2.5.7
* express@4.16.2
* jasmine@3.0.0
* nodejs@10.13.0
* passport@0.4.0
* postgres@11.1
* sequelize@4.32.6

#### Deployment:

* Heroku
* Heroku Postgres add-on

---

## Installation Procedure

1. Clone the aplication from [tribeapp in GitHub](https://github.com/Cesar-Jim/tribeapp)

(Terminal)

2. Go to the root directory of the application: cd .. /tribeapp
3. type "npm install" and hit enter
4. and type npm start to initialize the app and server

(Browser)

5. Open your browser and type in the following in your navigation bar: localhost:3000
6. All set!

---

## Run All Jasmine Tests 

(terminal)

1. Go to the root directory of the application: cd .. /tribeapp
2. type in the command: npm test

---

## Main Challenges / Lessons Learned

1. One of the biggest challenges was when I was getting a "no relations found" error from Sequelize. The issue was 
that I was not taking into account the timestamp of each migration so I was making an association of 2 models where
one of them was not even created.

I had to manipulate the timestamp of one migration, so that they in proper chronological order. It took me a while 
to find out but I did it. This error made me better understand how migrations work. 

2. The use of environment variables is crucial and they play a big role when deploying. If environment variables don't
match completely in both scenarios, development and production, Heroku will redirect the app to an internal server error.

---

## What I have done differently?

1. Used Sass preprocessor to streamline styling
2. Explore a solution using react for the frontend development

---

## Next Steps and Future Goals

1. Send a confirmation email to users with the Sendgrid package
2. Creation of private "Tipis" for premium users
3. Include some animations for a more appealing interface
4. Include a modal to confirm the deletion of Tipis
5. Premium users can delete messages
6. Show "..." when someone is typing a message
7. Add a button for mobile users
8. Add a favicon for the browser tab

---

## Repo in GitHub

Find the repository here: [tribeapp repo](https://github.com/Cesar-Jim/tribeapp)

---

By Cesar Jimenez
