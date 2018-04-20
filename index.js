import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('reactStarter', () => App);


if(typeof document !== "undefined") {
	console.log("------DOCUMENT----------")
	AppRegistry.runApplication('reactStarter', {
    	rootTag: document.getElementById('root')
	});
}