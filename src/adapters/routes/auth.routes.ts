import { AppError } from "@/core/errors/AppError";
import logger from "@/core/Logger";
import { Request, Response, Router } from "express";
import { makeAuthController } from "../factories/authControllerFactory";

const router = Router();
const authController = makeAuthController()

router.post("/auth", async(req:Request, res:Response) => {
  const { user_name, password } = req.body;
  try {
    if(!user_name || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const user = await authController.login({user_name, password})
    res.status(200).json(user)
    
  } catch (error:any) {
    logger.error("Error in auth route", error);
    
    if(error instanceof AppError){
      res.status(error.statusCode).json({ message: error.mensagem });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
})


export { router as authRoutes };

