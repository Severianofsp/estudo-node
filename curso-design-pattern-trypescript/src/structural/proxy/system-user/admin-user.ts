import {
  SystemUserAdressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  public firstName: string;
  public userName: string;

  constructor(firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }

  async getAddress(): Promise<SystemUserAdressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av. Brasil', number: 50 },
          { street: 'Rua A', number: 40 },
        ]);
      }, 200);
    });
  }
}
