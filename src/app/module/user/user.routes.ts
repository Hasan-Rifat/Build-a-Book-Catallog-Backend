import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', UserController.getAllFromDB);
router.get('/:id', UserController.getByIdFromDB);
router.patch('/:id', UserController.updateIntoDB);
router.delete('/:id', UserController.deleteFromDB);
router.get('/profile', UserController.getProfile);

export const UserRouter = router;
