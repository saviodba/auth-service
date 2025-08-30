import { AuthCredentials } from "@/application/DTOs/AuthCredentials";
import { AuthService } from "@/application/services/AuthService";

export class AuthController {
  constructor(private authService:AuthService) {}

  async login(params:AuthCredentials) {
    
    return await this.authService.authenticate(params)
   
  }
}
