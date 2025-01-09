import express, { Request, Response, NextFunction } from "express";
import {
  createUser,
  updateUser,
  getUsers,
} from "../controllers/userController";

const router = express.Router();

// Route to create a user
router.post(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await createUser(req, res);
    } catch (error) {
      next(error);
    }
  }
);

// Route to update a user
router.put(
  "/users/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await updateUser(req, res);
    } catch (error) {
      next(error);
    }
  }
);

// Route to get all users
router.get(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await getUsers(req, res);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
