

/**
 *
 */
import {Router} from 'express';
import RootController from './controllers/RootController'
import RankingController from './controllers/RankingController';
import RecordController from './controllers/RecordController';
const routes = new Router();

routes.get('/',RootController.index);

routes.get('/ranking',RankingController.index);
routes.post('/postrecord',RecordController.store);
routes.put('/ranking/:user_id',RankingController.update);
routes.delete('/deleterecord',RecordController.destroy);





export default routes;

