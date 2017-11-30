import React, { Component } from 'react';
import {connect} from 'react-redux'
import HeaderComponent from '../../components/HeaderComponent'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'
class User extends Component {
  render() {
    return (
      <div>
        <HeaderComponent title="个人信息" history={this.props.history} back="/"></HeaderComponent>
        <UserInfo userInfo={this.props.userInfo}></UserInfo>
        <OrderList username={this.props.userInfo.username}/>
      </div>

    );
  }
}
export default connect(
  state=>({
    userInfo:state.userInfo
  })
)(User)
