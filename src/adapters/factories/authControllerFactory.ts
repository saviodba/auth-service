import { AuthService } from "@/application/services/AuthService";
import { UserDao } from "@/infrastructure/database/dao/UserDao";
import { BcryptService } from "@/infrastructure/providers/BcryptService";
import { JwtService } from "@/infrastructure/providers/JwtService";
import { AuthController } from "../controllers/Auth.Controller";

export function makeAuthController():AuthController {
  const authService = new AuthService(
    new UserDao(), 
    new BcryptService(), 
    new JwtService()
  )

  return new AuthController(authService)
}