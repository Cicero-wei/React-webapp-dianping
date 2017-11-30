import React,{Component} from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Home from '../containers/Home/index.js'
import Detail from '../containers/Detail/index.js'
import Login from '../containers/Login/index.js'
import User from '../containers/User/index.js'
import City from '../containers/City/index.js'
import Search from '../containers/Search/index.js'
export default class RouterMap extends Component{
		constructor(){
			super();
			this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
		}
		render(){
			return(
				<Router>
						<Switch>
							<Route path='/' exact component={Home}/>
							<Route path='/detail/:id'component={Detail}/>
							<Route path='/login/:route?' component={Login}/>
							<Route path='/user' component={User}/>
							<Route path='/city' component={City}/>
							<Route path='/search/:kind/:keyword?' component={Search}/>
						</Switch>
				</Router>
			)
		}
}