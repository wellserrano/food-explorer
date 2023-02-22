💻 About
The application that we will develop is a digital menu for a fictitious restaurant, known as foodExplorer.

🚀 How to run the project
This project is divided into two parts:

Backend (food-explorer-backend folder)
Frontend (food-explorer-frontend folder)
Pre-requisites
Before starting, you will need to have the following tools installed on your machine: [Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/). Also, it's nice to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

🎲 Running the BackEnd (Server)
```
# Clone this repository
$ git clone git@github.com:patizani/food-explorer-backend.git

# Access the project folder in your terminal
$ cd food-explorer-backend

# Install the dependencies
$ npm install

# Execute as migration e seed
$ npm migrate
$ npm seed

# Run the application in development mode
$ npm run dev

# Login do admin
$ email: admin@email.com
$ password: 123456

# he Server will start at port: 3333 - go to <http://localhost:3333>
```

🧭 Running the Frontend (Application)
```
# Clone this repository
$ git clone git@github.com:patizani/food-explorer-frontend.git

# Access the project folder in your terminal
$ cd food-explorer-frontend

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev
```

This BackEnd was hosted directly on Render.
The Frontend was hosted directly on Netlify.
Note: As it is hosted on a free service, the BackEnd "hibernates" after 15 minutes of inactivity. If you are trying to access the website and the BackEnd is unresponsive, just wait as it will be "initializing" the services. This step may take up to 1 minute, depending on the load on the Render servers.

Deploy
Food Explorer
