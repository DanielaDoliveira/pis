import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from "cors";
dotenv.config()


class App{
  constructor(){
    this.server = express();
    mongoose.connect(`mongodb+srv://projetointegrado:projetointegrado@projetointegrado.hhlgxz0.mongodb.net/?retryWrites=true&w=majority`)
    this.middleware();
    this.routes();


  }

  middleware(){
    this.server.use(cors());
     this.server.use(express.json());
  }
  routes(){
    this.server.use(routes);
  }


 

}




export default new App().server;