import { AuthUser } from "@/application/DTOs/AuthUser";
import { AppError } from "@/core/errors/AppError";
import logger from "@/core/Logger";
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { PrismaClient } from "@prisma/client";


export class UserDao implements IUserRepository {
  
  private prisma: PrismaClient
  constructor(){
    this.prisma = new PrismaClient()
  }

  async findById(id: number): Promise<AuthUser | null> {
    try {
      const user = await this.prisma.logins.findUnique({
        where:{
          id      
        },
        include:{
          perfil:true
        }
      })
  
      if(!user){
        return null
      }
      
      return {
        id: user.id,        
        active:user.active,
        name: user.name,
        user_name:user.user_name,        
        password:user.password,        
      }   
    } catch (error) {
      logger.error("Erro ao consultar usuários: ", error)
      throw new AppError('Erro ao consultar usuários') 
    }

  }

  async findByUser(username: string): Promise<AuthUser | null> {
    
    try { 
      
      const user = await this.prisma.logins.findMany({
        where:{
          user_name:username
        }
      })

      if(!user || user.length === 0){
        return null
      }
      
      return {
        id: user[0].id,       
        active:user[0].active,
        name: user[0].name,
        user_name:user[0].user_name,        
        password:user[0].password,                
      }

    } catch (error:any) {
      logger.error("Erro ao realizar consulta do usuário", error)
      throw new AppError('Erro ao realizar consulta do usuário')
    }
  
  }

}