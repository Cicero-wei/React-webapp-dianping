import React,{Component} from 'react'
import RouterMap from '../routes/index.js'
import {connect} from 'react-redux'
//绑定actionCreator组成的对象
import {bindActionCreators} from 'redux'
import {getStorage} from '../local/index.js'
import PureRenderMixin from 'react-addons-pure-render-mixin'
//获取所有actionCreator组成的对象
import * as Actions from '../actions/userInfo.js'
class App extends Component{
	constructor(){
		super();
		this.state={
			loading:false
		} 
		this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	//页面加载后就设置一个城市
	componentDidMount() {
		let cityName=getStorage('cityName');
		if(cityName == null){
			cityName='杭州';
		}
		this.props.userActions.update({
			cityName
		})
		this.setState({
			loading:true
		})	
	}
	// 先去本地查找是否存储过localstorege name
	// 没有就赋予默认值
	// 将当前的城市存放到redux中
	render(){
		return(
			<div>
			{
				this.state.loading?<RouterMap></RouterMap>:<h4>正在加载</h4>
			}
			</div>
		)
	}

} 
export default connect(
	state=>({}),
	dispatch=>({
		userActions:bindActionCreators(Actions,dispatch)
	})
)(App)