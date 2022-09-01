import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('luz Quarto');
const bathroomLight = new SmartHouseLight('luz do Banheiro');

// Command
const bedLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);

const bedLightIntensityCommand = new LightIntensityCommand(bedroomLight);
const bathroomLightIntensityCommand = new LightIntensityCommand(bathroomLight);

// Controle - invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('bt-1', bedLightPowerCommand);
smartHouseApp.addCommand('bt-2', bathroomLightPowerCommand);

smartHouseApp.addCommand('bt-3', bedLightIntensityCommand);
smartHouseApp.addCommand('bt-4', bathroomLightIntensityCommand);

smartHouseApp.executeCommand('bt-1');
smartHouseApp.undoCommand('bt-1');
console.log();

smartHouseApp.executeCommand('bt-3');
smartHouseApp.undoCommand('bt-3');
console.log();

smartHouseApp.executeCommand('bt-4');
smartHouseApp.undoCommand('bt-4');
