import {Editor} from "./index";

export const demoState = () => {
	const editor = new Editor();
	editor.startEdit();
	editor.startEdit();
	editor.endEditing();

	editor.startEdit();
	editor.uploadImage();
	editor.saveDocument();
	editor.endEditing();

	editor.uploadImage();
	editor.startEdit();
	editor.saveDocument();
	editor.endEditing();

	editor.saveDocument();
	editor.uploadImage();
	editor.startEdit();
	editor.endEditing();
}
