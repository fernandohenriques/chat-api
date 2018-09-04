# Chat API (for [this](https://github.com/fernandohenriques/chat-app.git) front-end)

## Getting Started

Back-end poject of an open chat, written with NodeJS + Express + Socket.IO + Mongoose.


### Pre requisites

```
$ node --version
v10.9.0

$ NPM --version
v6.4.0

$ MongoDB --version
v4.0.2

```


### How to Run

```
Create a database in MongoDB
git clone https://github.com/fernandohenriques/chat-api.git
cd chat-api/
Create a file called .env
Open this file and add this variables:
  - PORT -> Port to API
  - SOCKET_PORT -> Port to Socket
  - MONGODB_URI ->  A MongoDB URI for database
npm install
npm start
```


### Running tests

#### Linter validations
```
cd chat-api/
npm run lint
```


## Built With

* [NodeJS](https://facebook.github.io/react-native/)
* [Express](http://expressjs.com/)
* [Socket.io](https://socket.io)
* [Mongoose](https://mongoosejs.com/)
* [Ramda](https://ramdajs.com/)
* [NPM](https://www.npmjs.com/)
* [ESLint](https://eslint.org/)
* [Nodemon](https://nodemon.io/)


## Author

* **Fernando Henriques** - [GitHub](https://github.com/fernandohenriques)
