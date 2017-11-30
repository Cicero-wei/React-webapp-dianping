import {createStore} from 'redux';
import reducers from '../reducers/index.js';
export function configStore(initState){
	return createStore(reducers,initState,window.devToolsExtension?window.devToolsExtension():undefined);
}; 
//redux-tools 插件 可以查看redux所有的状态