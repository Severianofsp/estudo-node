import { DeviceImplementation } from '../device/device-implementation';
import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const odlVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() + 10);
    console.log(
      `${this.device.getName()} tinha o volume ${odlVolume} agora tem ${this.device.getVolume()}`
    );
  }
  volumeDown(): void {
    const odlVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() - 10);
    console.log(
      `${this.device.getName()} tinha o volume ${odlVolume} agora tem ${this.device.getVolume()}`
    );
  }
}
