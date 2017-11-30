import {get} from '../index.js';
//获取详情数据
export function getInfo(id){
    return get('/api/detail/info/'+id);
}
//获取评价数据
export function getComment(id,page){
    return get('/api/detail/comment/'+id+'/'+page)
}