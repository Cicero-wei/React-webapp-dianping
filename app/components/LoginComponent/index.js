import React, { Component } from 'react';

export default class LoginComponent extends Component {
    constructor(){
        super();
        this.state={
            val:''
        }
    }
  render() {
    return (
      <div className="login-component">
        <input type="text" value={this.state.val} placeholder='请输入用户名'onChange={this.changeValue.bind(this)}/>
        <button onClick={this.login.bind(this)} className="back">登陆</button>
      </div>
    );
  }
  changeValue(e){
    this.setState({
        val:e.target.value
    })
  }
  login(){
    this.props.login(this.state.val);
  }
}
import './index.less'