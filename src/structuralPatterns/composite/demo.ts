import { Folder, File } from './index';

export const demoComposite = () => {
	const rootFolder = new Folder('root');

	const file1 = new File('file1.txt');
	const file2 = new File('file2.txt');

	const folder1 = new Folder('folder1');
	const folder2 = new Folder('folder2');

	const file3 = new File('file3.txt');
	const file4 = new File('file4.txt');

	folder1.addComponent(file3);
	folder2.addComponent(file4);

	rootFolder.addComponent(file1);
	rootFolder.addComponent(file2);
	rootFolder.addComponent(folder1);
	rootFolder.addComponent(folder2);

	rootFolder.display(' '); // Displays the structure
	rootFolder.removeComponent(file1);
	rootFolder.display(' '); // Displays the structure
};
