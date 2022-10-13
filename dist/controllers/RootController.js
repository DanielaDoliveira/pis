"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _path = require('path'); var _path2 = _interopRequireDefault(_path);

_path2.default = require('path');
class RootController{
 async index(req,res){

  return res.sendFile(_path2.default.resolve(__dirname,'..','Files','information.html'));
}

}

exports. default = new RootController();