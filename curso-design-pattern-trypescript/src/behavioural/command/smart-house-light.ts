export class SmartHouseLight {
  private isOn = false;
  private intensivy = 50;

  constructor(public name: string) {}
  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} agora está ${this.getPowerStatus()}`);
    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;
    console.log(`${this.name} agora está ${this.getPowerStatus()}`);
    return this.isOn;
  }

  increaseIntensity(): number {
    if (this.intensivy > 100) return this.intensivy;
    this.intensivy += 1;
    return this.intensivy;
  }

  decreaseIntensity(): number {
    if (this.intensivy <= 0) return this.intensivy;
    this.intensivy -= 1;
    return this.intensivy;
  }
}
