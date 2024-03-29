import { SystemUserProxy } from './system-user/system-user-proxy';
async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Felipe', 'severianofsp');
  console.log('Isso vai levar 2 segundos');
  console.log(await user.getAddress());

  console.log('Isso vai se repetir (CACHE)');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddress());
  }
}

clientCode();
