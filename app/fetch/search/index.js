import {get} from '../index'
export function getList(id,page){
    return get('/api/search/'+id+'/'+page)
}