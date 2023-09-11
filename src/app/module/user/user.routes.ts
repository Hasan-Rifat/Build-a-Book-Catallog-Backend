import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllFromDB);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getByIdFromDB);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.updateIntoDB);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteFromDB);
router.get(
  '/profile',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  UserController.getProfile
);

export const UserRouter = router;
