import { AppError } from "@/core/errors/AppError";
import { ICryptoService, ITokenService } from "@/domain/repositories/ICryptoService";
import { IUserRepository } from "@/domain/repositories/IUserRepository";

export class AuthService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly cryptoService: ICryptoService,
    private readonly tokenService: ITokenService
  ) {}

  async authenticate(data:Input): Promise<any> {
    const user = await this.userRepository.findByUser(data.user_name);
    if (!user) throw new AppError("Usuário ou senha inválidos",401) 

    if(!user.active) {
      throw new AppError("Usuário desativado ou senha inválida",401) 
    } 

    const valid = await this.cryptoService.compare(data.password, user.password);
    if (!valid) throw new AppError("Usuário ou senha inválidos",401)  

    const token = this.tokenService.generateToken({ id: user.id },"1d");
    
    return {
      name:user.name,
      token
    }
  }

  async hashPassword(password: string): Promise<string> {
    return this.cryptoService.hash(password);
  }
}

 type Input = {
  user_name:string
  password:string
}