export interface IAppContext {
  authenticated: boolean;
  signIn(username: string): Promise<void>;
  signOut(): Promise<void>;
}
