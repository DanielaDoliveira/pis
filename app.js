import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()


class App{
  constructor(){
    this.server = express();
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@projetointegrado.hhlgxz0.mongodb.net/?retryWrites=true&w=majority`)
    this.middleware();
    this.routes();


  }

  middleware(){
     this.server.use(express.json());
  }
  routes(){
    this.server.use(routes);
  }


 

}




export default new App().server;