"use strict";

const EventEmitter = require("node:events");
const http = require("node:http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

// Observer
// 1st Event listener
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

// 2nd Event listener
myEmitter.on("newSale", () => {
  console.log("Customer name: Jonas");
});

// 3rd Event listener
myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

// Event emitter --> emits the event
myEmitter.emit("newSale", 9);

/////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request 😃");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
