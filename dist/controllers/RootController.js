"use strict";Object.defineProperty(exports, "__esModule", {value: true});


class RootController{
 async index(req,res){

  return res.send('<h1>Welcome to the Root Page</h1>');
}

}

exports. default = new RootController();