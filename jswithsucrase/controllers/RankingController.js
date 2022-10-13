import User from "../models/User";

class RankingController{

  async index (req,res){
   const {limit} = req.query || 10;
   const all = await User.find().limit(limit).sort({"record":-1});
   return res.status(200).json(all);

  }

 async update (req, res){
  const {user_id} = req.params;
  const {username} = req.body;
  const user = await User.updateOne({_id: user_id}, {
    username,
    
  })
  res.status(200).json(user);
 }
}

export default new RankingController();