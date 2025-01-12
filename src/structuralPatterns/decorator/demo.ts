import { DataSource, SalaryManager, FileDataSource, EncryptionDecorator, CompressionDecorator, } from './index';

export const demoDecorator = ({ encryption, compression }: { encryption: boolean; compression: boolean }) => {
	let source: DataSource = new FileDataSource("./text.txt");

	if (encryption) {
		source = new EncryptionDecorator(source);
	}

	if (compression) {
		source = new CompressionDecorator(source);
	}

	const logger = new SalaryManager(source);
	console.log("Loaded salary data:", logger.load());
	logger.save("{'string': 'value'}");
	console.log("Loaded salary data:", logger.load());

}
