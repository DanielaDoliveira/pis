import User from "../models/User";

class RecordController{
  async store(req,res){
    const {username,record} = req.body;
 
   
   if(username!= null && record != null)
   {
      if(username!= "")
      {
        const ranking_board = await User.create({
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
    await User.findOneAndDelete({_id:id})
    return res.json({message: "Excluído com sucesso!"})
   }

  
}

export default new RecordController();