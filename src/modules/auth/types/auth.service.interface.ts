import { IUser } from "../../../shared/types/user.interface";

export interface IAuthService {
  signIn(username: string): Promise<IUser | null>;
}
