// Command Interface
interface Command {
	execute(): void;
	undo(): void; // To reverse the command if needed
}

// Receiver
export class Light {
	turnOn(): void {
		console.log('The light is ON');
	}

	turnOff(): void {
		console.log('The light is OFF');
	}
}

// Concrete Command: TurnOnLightCommand
export class TurnOnLightCommand implements Command {
	private light: Light;

	constructor(light: Light) {
		this.light = light;
	}

	execute(): void {
		this.light.turnOn();
	}

	undo(): void {
		this.light.turnOff();
	}
}

// Concrete Command: TurnOffLightCommand
export class TurnOffLightCommand implements Command {
	private light: Light;

	constructor(light: Light) {
		this.light = light;
	}

	execute(): void {
		this.light.turnOff();
	}

	undo(): void {
		this.light.turnOn();
	}
}

// CommandHistory Class
class CommandHistory {
	private history: Command[] = [];
	private undoneCommands: Command[] = [];

	// Add a command to history when executed
	push(command: Command): void {
		this.history.push(command);
		this.undoneCommands = []; // Clear undone commands when a new command is executed
	}

	// Undo the last command
	undo(): void {
		if (this.history.length === 0) {
			console.log('No commands to undo');
			return;
		}
		const command = this.history.pop();
		if (command) {
			command.undo();
			this.undoneCommands.push(command);
		}
	}

	// Redo the last undone command
	redo(): void {
		if (this.undoneCommands.length === 0) {
			console.log('No commands to redo');
			return;
		}
		const command = this.undoneCommands.pop();
		if (command) {
			command.execute();
			this.history.push(command);
		}
	}
}

// Invoker
export class RemoteControl {
	private commandHistory = new CommandHistory();

	executeCommand(command: Command): void {
		command.execute();
		this.commandHistory.push(command);
	}

	undo(): void {
		this.commandHistory.undo();
	}

	redo(): void {
		this.commandHistory.redo();
	}
}
