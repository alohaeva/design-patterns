import {
	Light,
	RemoteControl,
	TurnOffLightCommand,
	TurnOnLightCommand,
} from './index';

export const demoCommand = () => {
	// Client
	const light = new Light();
	const turnOnLight = new TurnOnLightCommand(light);
	const turnOffLight = new TurnOffLightCommand(light);

	const remote = new RemoteControl();

	// Turn the light ON
	remote.executeCommand(turnOnLight);

	// Turn the light OFF
	remote.executeCommand(turnOffLight);

	// Undo the last action (Turn the light ON again)
	remote.undo();

	// Redo the action (Turn the light OFF again)
	remote.redo();
};
