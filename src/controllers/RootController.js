


class RootController{
 async index(req,res){

  return res.send('<h1>Welcome to the Root Page</h1>');
}

}

export default new RootController();