import * as Types from '../action-types/userInfo.js'
//actionCreater
export function update(data){
	return {
		type:Types.UPDATE_CITY,
		data
	}
}
