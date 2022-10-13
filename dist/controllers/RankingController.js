"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class RankingController{

  async index (req,res){
   const {limit} = req.query || 10;
   const all = await _User2.default.find().limit(limit).sort({"record":-1});
   return res.status(200).json(all);

  }

 async update (req, res){
  const {user_id} = req.params;
  const {username} = req.body;
  const user = await _User2.default.updateOne({_id: user_id}, {
    username,
    
  })
  res.status(200).json(user);
 }
}

exports. default = new RankingController();