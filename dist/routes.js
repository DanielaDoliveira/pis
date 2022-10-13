"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 */
var _express = require('express');
var _RootController = require('./controllers/RootController'); var _RootController2 = _interopRequireDefault(_RootController);
var _RankingController = require('./controllers/RankingController'); var _RankingController2 = _interopRequireDefault(_RankingController);
var _RecordController = require('./controllers/RecordController'); var _RecordController2 = _interopRequireDefault(_RecordController);
const routes = new (0, _express.Router)();

routes.get('/',_RootController2.default.index);

routes.get('/ranking',_RankingController2.default.index);
routes.post('/postrecord',_RecordController2.default.store);
routes.put('/ranking/:user_id',_RankingController2.default.update);
routes.delete('/deleterecord',_RecordController2.default.destroy);





exports. default = routes;

