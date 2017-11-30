import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getAd} from '../../../../fetch/home/index.js'
import '../index.less'
export default class Ad extends Component{
	constructor(){
		super();
		this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			loading:[]
		}
	}
	componentDidMount() {
		getAd().then(res=>res.json()).then(data=>{
			this.setState({
				loading:data
			})
		})
	}
	render(){
		
		return(
			<div className="Ad">
				<h3>超值特惠</h3>
				
				{this.state.loading.length?this.state.loading.map((item,index)=>(
					<a href={item.link} key={index}>
						<img src={item.img} title={item.title}/>
					</a>
				)):<div className="loading">正在加载。。。</div>}

			</div>
		)
	}

} 