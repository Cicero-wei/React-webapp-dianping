import React, { Component } from 'react';

export default class OrderListItem extends Component {
    constructor(props){
        super();
        //将属性转化为自己的状态
        this.state={
            commentState:props.data.commentState
        }
    }
    changeCommentState(){
        this.setState({
            commentState:1
        })
    }
    cancle(){
        this.setState({
            commentState:0
        })
    }
    sureCommit(){
        this.props.commitComponent(this.props.data.id,this.commit.value,this.changeState.bind(this))
    }
    changeState(){
        this.setState({
            commentState:2
        })
    }
    render() {
    let {id,commentState,img,title,count,price}=this.props.data
    return (
        <div>
            <div className="order-list">
                <img src={img} alt=""/>
                <div className="list-item">
                    <h3>{title}</h3>
                    <span>数量：{count}</span>
                    <span>价格：{price}</span>
                </div>        
                <div className="order-btn">
                {
                    this.state.commentState ===0?<button onClick={this.changeCommentState.bind(this)}>评价</button>:
                    this.state.commentState ===1?'':<button className="unselect">已评价</button>
                }
                    
                </div>
            </div>
            {this.state.commentState ===1?<div className="comment-area">
                <textarea ref={ref=>this.commit=ref}>
                </textarea>
                <div>
                    <button onClick={this.sureCommit.bind(this)}>确认</button>
                    <button onClick={this.cancle.bind(this)}>取消</button>
                </div>
            </div>:null}
        </div>
    );
  }
}
import './index.less'
