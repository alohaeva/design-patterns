export class Editor {
	private state: EditorState;

	constructor() {
		this.state = new BaseEditorState();
	}

	changeState(newState: EditorState) {
		this.state = newState;
	}

	endEditing() {
		this.state.endEditing(this);
	}

	startEdit() {
		this.state.startEdit(this);
	}

	uploadImage() {
		this.state.uploadImage(this);
	}

	saveDocument() {
		this.state.saveDocument(this);
	}
}

abstract class EditorState {
	protected constructor() {}
	abstract startEdit(editor: Editor): void;
	abstract endEditing(editor: Editor): void;
	abstract uploadImage(editor: Editor): void;
	abstract saveDocument(editor: Editor): void;
}

class BaseEditorState implements EditorState {
	constructor() {}
	startEdit(editor: Editor) {
		console.log(`[${this.constructor.name}] start edit`);
		editor.changeState(new EditingEditorState());
	}
	endEditing(editor: Editor) {
		console.log(`[${this.constructor.name}]: editor is already in base state`);
	}
	uploadImage(editor: Editor) {
		console.log(`[${this.constructor.name}] start upload image`);
		editor.changeState(new LockedEditorState());
		setTimeout(() => {
			console.log(`[${this.constructor.name}] end upload image`);
			editor.changeState(new BaseEditorState());
		}, 1000);
	}
	saveDocument(editor: Editor) {
		console.log(`[${this.constructor.name}] start save document`);
		editor.changeState(new SavingEditorState());
		setTimeout(() => {
			console.log(`[${this.constructor.name}] end save document`);
			editor.changeState(new BaseEditorState());
		}, 1000);
	}
}

class EditingEditorState implements EditorState {
	constructor() {}
	startEdit(editor: Editor) {
		console.log(`[${this.constructor.name}]: editor is already in editing state`);
	}
	endEditing(editor: Editor) {
		console.log(`[${this.constructor.name}] end edit`);
		editor.changeState(new BaseEditorState());
	}
	uploadImage(editor: Editor) {
		console.log(`[${this.constructor.name}]: end editing before upload image`);
	}
	saveDocument(editor: Editor) {
		console.log(`[${this.constructor.name}]: end editing before save document`);
	}
}

class LockedEditorState implements EditorState {
	constructor() {}
	startEdit(editor: Editor) {
		console.log(`[${this.constructor.name}]: wait for editor to be unlocked`);
	}
	endEditing(editor: Editor) {
		console.log(`[${this.constructor.name}]: wait for editor to be unlocked`);
	}
	uploadImage(editor: Editor) {
		console.log(`[${this.constructor.name}]: editor is already in locked state`);
	}
	saveDocument(editor: Editor) {
		console.log(`[${this.constructor.name}]: wait for editor to be unlocked`);
	}
}

class SavingEditorState implements EditorState {
	constructor() {}
	startEdit(editor: Editor) {
		console.log(
			`[${this.constructor.name}]: wait for editor to be in base state`,
		);
	}
	endEditing(editor: Editor) {
		console.log(
			`[${this.constructor.name}]: wait for editor to be in base state`,
		);
	}
	uploadImage(editor: Editor) {
		console.log(
			`[${this.constructor.name}]: wait for editor to be in base state`,
		);
	}
	saveDocument(editor: Editor) {
		console.log(`[${this.constructor.name}]: editor is already in saving state`);
	}
}
