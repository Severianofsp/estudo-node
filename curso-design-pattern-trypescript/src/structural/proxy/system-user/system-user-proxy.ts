import { AdminUser } from './admin-user';
import {
  SystemUserAdressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realUserAdress: SystemUserAdressProtocol[] | null = null;

  constructor(public firstName: string, public userName: string) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }
    return this.realUser;
  }
  async getAddress(): Promise<SystemUserAdressProtocol[]> {
    this.realUser = this.createUser();

    if (this.realUserAdress === null) {
      this.realUserAdress = await this.realUser.getAddress();
    }

    return this.realUserAdress;
  }
}
