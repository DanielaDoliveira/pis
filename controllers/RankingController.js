import User from "../models/User";

class RankingController{

  async index (req,res){
   
   const all = await User.find().sort({"record":-1});
   return res.json(all);

  }


}

export default new RankingController();