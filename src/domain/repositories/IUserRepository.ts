import { AuthUser } from "@/application/DTOs/AuthUser";

export interface IUserRepository {
  findByUser(username: string): Promise<AuthUser | null>;
  findById(id:number): Promise<AuthUser | null>
}