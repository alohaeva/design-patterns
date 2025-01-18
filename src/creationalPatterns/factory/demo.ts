import { WebDialog, ServerDialog } from './index';

export const demoFactory = (env: 'WEB' | 'SERVER') => {
	const dialog = env === 'WEB' ? new WebDialog() : new ServerDialog();

	dialog.render();

	console.log(dialog.open);

	dialog.clickButton();

	console.log(dialog.open);
};
