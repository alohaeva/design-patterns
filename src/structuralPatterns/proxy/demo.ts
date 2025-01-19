import { ProxyService } from './index';

export const demoProxy = () => {
	console.log('Using ProxyService:');
	const proxy = new ProxyService();
	proxy.request();
};
