export interface AuthUser {
  id: number;
  user_name: string;
  name:string;
  password: string; // hash
  active: boolean;
}
