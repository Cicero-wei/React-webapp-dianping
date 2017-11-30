import React from 'react'
import {render} from 'react-dom'
import App from './containers/index.js'
import './assets/index.less'
import {configStore} from './store/index.js'
import {Provider} from 'react-redux'
//App负责选择哪个页面
let store=configStore();
render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.querySelector('#root')
)