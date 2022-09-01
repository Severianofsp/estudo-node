export type SystemUserAdressProtocol = { street: string; number: number };

export interface SystemUserProtocol {
  firstName: string;
  userName: string;

  getAddress(): Promise<SystemUserAdressProtocol[]>;
}
