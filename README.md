
**

## 💻 About

This application is a test for a restaurant web page where you can register new products and place orders online, making the ordering process more convenient for the customer.


## 🚀 Running the project

This project is divided into two parts, in two different repositories:
- [Front end](https://github.com/wellserrano/foodexp-frontend)
- [Back end](https://github.com/wellserrano/foodexp-api)

Both are needed to run the front end, since the server is needed to fetch data and load components, so you may want to clone both of them and follow the steps described below.

**Pre-requisites**
Before starting, you will need to have the following tools installed on your machine: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Also, it's nice to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

## 🎲 Starting Back end
```
# Clone this repository
$ git clone git@github.com:wellserrano/foodexp-api.git

# Access the project folder in your terminal
$ cd foodexp-api

# Install the dependencies
$ npm install

# Execute as migration e seed
$ npm migrate
$ npm seed

# Run the application in development mode
$ npm run dev

# Login do admin
$ email: admin
$ password: admin123
```

## 🎲 Starting Front end
```
# Clone this repository
$ git clone git@github.com:wellserrano/foodexp-frontend.git

# Access the project folder in your terminal
$ cd foodexp-frontend

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev
```

This Back end was hosted directly on [Render](https://foodexp-api.onrender.com).
The Front end was hosted directly on [Netlify](https://foodexp-rocketseat.netlify.app/).

Note: As it is hosted on a free service, the BackEnd "hibernates" after 15 minutes of inactivity. If you are trying to access the website and the BackEnd is unresponsive, just wait as it will be restarting the services. This step may take up to 1 minute, depending on the load on the Render servers. Some types of requests may take some seconds.
