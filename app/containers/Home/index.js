import React,{Component} from 'react'
import HomeHeader from '../../components/HomeHeader/index.js'
import Slider from '../../components/Slider/index.js'
import Ad from './subpage/Ad/Ad.js'
import List from './subpage/List/List.js'
import {connect} from 'react-redux'

class Home extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<HomeHeader history={this.props.history} cityName={this.props.userInfo.cityName}/>
				<Slider/>
				<Ad/>
				<List cityName={this.props.userInfo.cityName}/>
			</div>
		)
	}

} 
export default connect(
	state=>({
		userInfo:state.userInfo
	})
)(Home)
//取出redux中的城市 传递给homeHeader组件