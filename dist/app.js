"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _dotenv = require('dotenv'); var dotenv = _interopRequireWildcard(_dotenv);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
dotenv.config()


class App{
  constructor(){
    this.server = _express2.default.call(void 0, );
    _mongoose2.default.connect(`mongodb+srv://projetointegrado:projetointegrado@projetointegrado.hhlgxz0.mongodb.net/?retryWrites=true&w=majority`)
    this.middleware();
    this.routes();


  }

  middleware(){
    this.server.use(_cors2.default.call(void 0, ));
     this.server.use(_express2.default.json());
  }
  routes(){
    this.server.use(_routes2.default);
  }


 

}




exports. default = new App().server;