import React, { Component } from 'react';

export default class Star extends Component {
    constructor(props){
        super(props);
        let arr=[];
        for(var i=1;i<=5;i++){
            if(i<=props.count){
                arr.push(true);
            }else{
                arr.push(false);
            }
        }
        this.state={
            arr
        }
    }
    render() {
        return (
            <div className="star">
                {this.state.arr.map((item,index)=>(
                    item?<i className="iconfont icon-xingx2 font" key={index}></i>:
                    <i className="iconfont icon-xingx1 font" key={index}></i>
                ))}
            </div>
        );
    }
}
import './index.less'