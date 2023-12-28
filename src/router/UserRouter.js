import express from "express";

import { deleteUserById, getAllUsers, getUserById, postUser, putUserById } from "../controller/UserController.js"
import { myLogger } from "../middleware/loggerMiddileware.js";

export const userRouter = express.Router();


userRouter.get('/', myLogger, getAllUsers)
userRouter.get('/:id', myLogger, getUserById)
userRouter.post('/', myLogger, postUser);
userRouter.put('/:id', myLogger, putUserById);
userRouter.delete('/:id', myLogger, deleteUserById);