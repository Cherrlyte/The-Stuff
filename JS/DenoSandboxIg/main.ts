// deno-lint-ignore-file no-unused-vars
import http from "http"
import { MongoClient } from "mongodb"

const dbClient = new MongoClient("mongodb://127.0.0.1:27017")

const srv = http.createServer((req, res) => {
  switch(req.url){
    case "/":
      res.statusCode = 200;
      res.end("Root of webpage.");
      break;
    case "/500test":
      res.statusCode = 500;
      res.end("Oh no! Anyways...")
      break;
    case "/emptypage":
      res.statusCode = 200;
      break;
    default:
      res.statusCode = 404;
      res.end("Request cannot be handled: Not Found.");
      break;
  }
})

srv.listen(3000, () => {
  console.log("Running!")
})