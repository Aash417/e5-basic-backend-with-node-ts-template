import { Router } from 'express';
import { test } from './../controllers/user.controller';

const router  = Router();

router.route('/user').get(test);

export default router;
