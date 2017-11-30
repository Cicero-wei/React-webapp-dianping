import {get,post} from '../index'
export function getOrderList(username){
    return get('/api/orderlist/'+username);
}
//修改评价
export function postComment(obj){
    return post('/api/comment',obj)
}