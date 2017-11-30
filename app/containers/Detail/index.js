import React, { Component } from 'react';
import HeaderComponent from '../../components/HeaderComponent/index.js'
import Info from './subpage/Info.js'
import Comment from './subpage/Comment'
import Buy from '../../components/Buy/index.js'
import {connect} from 'react-redux';
import * as Actions from '../../actions/store'
import {bindActionCreators} from 'redux'
class Detail extends Component {
    constructor(){
        super();
        this.state={
            isStore:false
        }
    }
    //通过路由渲染的组件this.props都会携带很多参数
    render() {
        return (
            <div>
                {/* 头部  */}
                <HeaderComponent title="商户详情" history={this.props.history} back='/'/>
                {/* 商户信息 */}
                <Info id={this.props.match.params.id}/>
                {/* 购买和收藏 */}
                <Buy 
                    store={this.store.bind(this)} 
                    buy={this.buy.bind(this)}
                    isStore={this.state.isStore}
                />
                {/* 评论 */}
                <Comment id={this.props.match.params.id}/>
            </div>
        );
    }
    checkLogin(){//检测是否登录
        return this.props.userInfo.username?this.props.history.push('/user'): this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id));
    }
    componentDidMount(){
      let id=this.props.match.params.id;
      let flag=this.props.store.some(item=>id===item)
        if(flag){
            this.setState({
                isStore:flag
            })
        }
    }
    
    //购买
    buy(){
        //如果登陆成功点击购买 跳转到用户页面
       
            //如果登陆成功后还要跳回当前页
            this.checkLogin();
    }
    //收藏
    store(){
        if(!this.props.userInfo.username){
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id));
        }
        let id=this.props.match.params.id
        if(this.state.isStore){
            //移除
            this.props.storeActions.remove(id);
        }else{
            //添加
            this.props.storeActions.add(id);
        }
        this.setState({
            isStore:!this.state.isStore
        })
    }
}
export default connect(state=>({
    userInfo:state.userInfo,
    store:state.store
}),
dispatch=>({
    storeActions:bindActionCreators(Actions,dispatch)
})
)(Detail)