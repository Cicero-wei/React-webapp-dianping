import 'whatwg-fetch';
import 'es6-promise';
export function get(url){
	return fetch(url,()=>{
		Accept:'application/json';
	})
}
function toUrlencoded(obj){//将对象转化为form表单
	let arr=[];
	for(let key in obj){
		arr.push(`${key}=${obj[key]}`)
	}
	return arr.join('&');
}
export function post(url,obj){
	return fetch(url,{
		method:'POST',
		headers:{
			'Content-Type':'application/x-www-form-urlencoded'
		},
		body:toUrlencoded(obj)
	})
}