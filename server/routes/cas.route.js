import { Router } from 'express';
const router = new Router();

//To use cas controller
import * as CasController from '../controllers/cas.controller';


//TO use Cookie and session
import session from 'express-session';
import cookieParser from 'cookie-parser';

var MemoryStore = require('session-memory-store')(session);

router.use(cookieParser());
router.use(session({
    name: 'NSESSIONID',
    secret: 'This a string to make a secret',
    store: new MemoryStore()  // or other session store 
}));

router.use(CasController.getCas().core());  // link CAS to Express

router.route('/login').get(CasController.connection); //URL to login
router.route('/cas/login').get(CasController.connection); //URL once we are logged
router.route('/logout').get(CasController.getCas().logout()) //URL to logout

export default router;