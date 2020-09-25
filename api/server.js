const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const server = express();

// Import Routes

// Middleware
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger);

// Routes

// Root
server.get("/", (req, res) => {
  const message = process.env.MESSAGE || "Hello from server.js file";
  res.send(`<h2>${message}</h2>`);
});

// Dev Middleware
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

module.exports = server;
