import * as Types from '../action-types/store'
let initState=[];
export function store(state=initState,action){
    switch(action.type){
        case Types.ADD_STORE:
            return [...state,action.data];
        case Types.REMOVE_STORE:
            return state.filter(item=>{
                return item!=action.data
            })
        default:
            return state;
    }
}