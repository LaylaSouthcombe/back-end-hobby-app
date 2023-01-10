const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const userRoutes = require('./routes/users')
const listingRoutes = require('./routes/listings')
const authRoutes = require('./routes/auth')
const interactionRoutes = require('./routes/interactions')

server.use('/users', userRoutes)
server.use('/listings', listingRoutes)
server.use('/auth', authRoutes)
server.use('/interactions', interactionRoutes)

// Root route
server.get('/', (req, res) => res.send('Hello, world!'))

module.exports = server