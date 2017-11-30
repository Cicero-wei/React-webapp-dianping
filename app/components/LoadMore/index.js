import React, { Component } from 'react';
import './index.less'
export default class LoadMore extends Component {
    loadMoreData(){
        if(this.props.isLoading){
           return;
        }
        this.props.loadMoreData();
    }
    componentDidMount(){
        //绑定滚动事件
        this.fn=()=>{
           //节流
            clearTimeout(this.timer);
            this.timer=setTimeout(()=>{
                //先判断是否正在加载
                if(this.props.isLoading){
                    return;
                }
                //屏幕的高度
                let screen=window.screen.height;
                //getBoundingClientRect()距离当前屏幕上下左右的高度
                let top=this.refs.more.getBoundingClientRect().top;
                if(top < screen){//如果按钮就如可视窗口加载更多
                    this.props.loadMoreData();
                }
            },50)
        }
        window.addEventListener('scroll',this.fn);
    }
    componentWillUnmount(){
        //移除滚动事件
        window.removeEventListener('scroll',this.fn);
    }
    
    render() {
        return (
            <div className="hasMore">
                {this.props.hasMore?
                        <div onClick={this.loadMoreData.bind(this)} ref="more">加载更多</div>
                        :<div>我是有底线的</div>
                }
            </div>
        );
    }
}