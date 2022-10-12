import User from "../models/User";

class RankingController{

  async index (req,res){
   const {limit} = req.query || 10;
   const all = await User.find().limit(limit).sort({"record":-1});
   return res.json(all);

  }

 
}

export default new RankingController();