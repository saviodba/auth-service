// src/infrastructure/services/JwtService.ts
import { AppError } from "@/core/errors/AppError";
import { ITokenService } from "@/domain/repositories/ICryptoService";
import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";

export class JwtService implements ITokenService {
  private readonly jwtSecret: Secret;
  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || "secret";
  }

  generateToken(payload: object, expiresIn:number | string | any): string {
    const options: SignOptions = { expiresIn };
    return jwt.sign(payload, this.jwtSecret, options);

    
  }

  verifyToken(token: string): JwtPayload | string | null {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (error) {
      console.error("Erro ao verificar token JWT: ", error);
      throw new AppError("Token inválido ou expirado", 401);
    }
  }
}
