import React, { Component } from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
import LoginComponent from '../../components/LoginComponent'
class Login extends Component {
    constructor(){
        super();
        this.state={
            login:false
        }
    }

    render(){
    return (
      <div>
        <HeaderComponent title="登陆" history={this.props.history}/>
        {/* 如果登陆过显示登陆组件 */}
        {
            this.state.login?<LoginComponent login={this.login.bind(this)}/>:null
        }
      </div>
    );
  }
  componentDidMount(){
    this.checkLogin();
  }
  login(username){
      var info=this.props.userInfo;
      info.username=username;
      this.props.userActions.update(info);
      //如果是从其他页面进入的再调回其他页面
      if(this.props.match.params.route){
          this.props.history.push(decodeURIComponent(this.props.match.params.route))
      }else{
        this.props.history.push('/user');
      }
      
  }
  checkLogin(){
      //检查是否登录检查是否登录
      if(this.props.userInfo.username){
          this.props.history.push('/user');
      }
      this.setState({
          login:true//显示登陆组件
      })
  }

}
export default connect(state=>{
    return {userInfo:state.userInfo}
},dispatch=>{
    return {userActions:bindActionCreators(Actions,dispatch)}
})(Login)