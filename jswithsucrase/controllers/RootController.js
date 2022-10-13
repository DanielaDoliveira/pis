

import path from 'path';

path = require('path');
class RootController{
 async index(req,res){

  return res.status(200).sendFile(path.resolve(__dirname,'..','Files','information.html'));
}

}

export default new RootController();