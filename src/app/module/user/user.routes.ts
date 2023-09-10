import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/');
router.get('/:id', UserController.getByIdFromDB);
router.patch('/:id', UserController.updateIntoDB);
router.delete('/:id', UserController.deleteFromDB);
router.get('/profile', UserController.);

export const UserRouter = router;

/* 

auth/signup (POST)


users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
users/6177a5b87d32123f08d2f5d4 (PATCH)
users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database
profile (GET)

*/
