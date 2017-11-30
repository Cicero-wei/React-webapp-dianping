import * as Actions from '../action-types/store'
export function add(id){
    return {
        type:Actions.ADD_STORE,
        data:id
    }
}
export function remove(id){
    return {
        type:Actions.REMOVE_STORE,
        data:id
    }
}