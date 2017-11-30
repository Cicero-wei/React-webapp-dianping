//合并所有reducer并且导出，让store使用
import {combineReducers} from 'redux'
import {userInfo} from './userInfo.js' 
import {store} from './store'
export default combineReducers({
	userInfo,
	store
})

