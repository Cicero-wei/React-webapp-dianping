import React,{Component} from 'react'
//主页头部组件
import './index.less'
import {Link} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../../components/SearchInput'
export default class HomeHeader extends Component{
	constructor(){
		super();
		this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	toSearch(value){
		this.props.history.push('/search/all/'+value)
	}
	render(){
		return(
			<div  className="home-header back">
				<div className="city">
					<Link to='/city'>
						{this.props.cityName}
						<i className="iconfont icon-xia"></i>
					</Link>
				</div>
				<div className="search">
					<i className="iconfont icon-sousuo"></i>
					
					<SearchInput vaule='' search={this.toSearch.bind(this)}/>
				</div>
				<Link to='/login'>
					<div className="profile">
						<i className="iconfont icon-people_fill"></i>
					</div>
				</Link>
			</div>
		)
	}

} 