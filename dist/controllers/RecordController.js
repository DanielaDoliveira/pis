"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class RecordController{
  async store(req,res){
    const {username,record} = req.body;
 
   
   if(username!= null && record != null)
   {
      if(username!= "")
      {
        const ranking_board = await _User2.default.create({
          username,
          record
        });
     
        return res.status(200).json(ranking_board);
      }
   }

   else{
    res.status(415).send("Invalid format: Username or password are blank!");
   }
  
    
   }



   async destroy(req,res){
    const {username} = req.body;
    const {id} = req.headers;
    await _User2.default.findOneAndDelete({_id:id})
    return res.json({message: "Excluído com sucesso!"})
   }

  
}

exports. default = new RecordController();