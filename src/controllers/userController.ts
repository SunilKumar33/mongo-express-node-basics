import { Request, Response } from "express";
import { UserModel, IUser } from "../models/userModel";
import { Logger } from "../utils/logger";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email, age } = req.body as IUser;
  try {
    const newUser = new UserModel({ name, email, age });
    const savedUser = await newUser.save();
    Logger.info("User created successfully:", savedUser);
    return res
      .status(201)
      .json({ message: "User created successfully", data: savedUser });
  } catch (error: any) {
    Logger.error("Error creating user:", error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const { name, email, age } = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      Logger.warn("User not found:", id);
      return res.status(404).json({ error: "User not found" });
    }
    Logger.info("User updated successfully:", updatedUser);
    return res
      .status(200)
      .json({ message: "User updated successfully", data: updatedUser });
  } catch (error: any) {
    Logger.error("Error updating user:", error.message);
    return res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await UserModel.find();
    Logger.info("Users retrieved successfully");
    return res.status(200).json({ data: users });
  } catch (error: any) {
    Logger.error("Error retrieving users:", error.message);
    return res.status(500).json({ error: error.message });
  }
};
