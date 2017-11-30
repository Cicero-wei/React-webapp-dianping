import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getOrderList,postComment} from '../../../fetch/orderlist'
import OrderListComponent from '../../../components/OrderListComponent'
export default class OrderList extends Component {
    constructor(){
        super();
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
      getOrderList(this.props.username).then(res=>res.json()).then(data=>{
        this.setState({
              data
          })
      })
    }
    commitComponent(id,content,callback){
        //提交评论内容
        postComment({id,content}).then(res=>res.json).then(data=>{
            callback();
            console.log(data);
        })
    }
  render() {
    return (
        <div>
        {this.state.data.length?<OrderListComponent commitComponent={this.commitComponent.bind(this)}data={this.state.data}/>:<div>正在加载。。。</div> }
        </div>
    );
  }
}
