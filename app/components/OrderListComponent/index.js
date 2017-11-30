import React, { Component } from 'react';
import OrderListItem from './OrderListItem'
export default class OrderListComponent extends Component {
  render() {
    return (
      <div>
        <h3>订单列表</h3>
        {
            console.log(this.props.data)
        }
        {this.props.data.map((item,index)=>(
            <OrderListItem key={index} data={item} commitComponent={this.props.commitComponent}></OrderListItem>
        ))}
      </div>
    );
  }
}
