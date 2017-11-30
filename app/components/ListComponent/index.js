import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListItem from './ListItem/index.js'
export default class ListComponent extends Component{
	constructor(){
		super();
		this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return(
			<div>
				{
					this.props.data.map((item,index)=>(
						<ListItem key={index} data={item}/>
				))}
			</div>
		)
	}

} 
