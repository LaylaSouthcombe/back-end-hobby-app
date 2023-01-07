const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const userRoutes = require('./controllers/users')
const listingRoutes = require('./controllers/listings')

server.use('/users', userRoutes)
server.use('/listings', listingRoutes)

// const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Hello, world!'))

module.exports = server