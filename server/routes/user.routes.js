import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Get all users
router.route('/users').get(UserController.getUsers);

// Get one user by user_id
router.route('/users/:user_id').get(UserController.getUser);

// Add a new user
router.route('/users').post(UserController.addUser);

// Delete a user by user_id
router.route('/users/:user_id').delete(UserController.deleteUser);

// Modify a user by user_id
router.route('/users/:user_id').put(UserController.setUser);

export default router;