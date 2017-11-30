import React, { Component } from 'react';

export default class UserInfo extends Component {
  render() {
      let {cityName,username}=this.props.userInfo;
    return (
      <div className="userinfo-container">
      <p>
          用户名：<span>{username}</span>
      </p>
      <p>
          城市：<span>{cityName}</span>
      </p>
  </div>
    );
  }
  //检查是否登录
}
import './index.less'