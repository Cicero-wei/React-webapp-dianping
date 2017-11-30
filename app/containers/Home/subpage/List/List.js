import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getList} from '../../../../fetch/home/index.js'
import ListComponent from '../../../../components/ListComponent/index.js'
import LoadMore from '../../../../components/LoadMore/index.js'
export default class List extends Component{
	constructor(){
		super();
		this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			hasMore:true,
			data:[],
			page:0,
			isLoading:true
		}
	}
	componentDidMount() {
		getList(this.props.cityName,0).then(res=>res.json()).then(({hasMore,data})=>{
			this.setState({
				hasMore,
				data:[...this.state.data,...data],
				isLoading:false
			}) 
		})
	}
	loadMoreData(){
		
		this.setState({
			page:this.state.page+1,
			isLoading:true
		},()=>{
			getList(this.props.cityName,this.state.page).then(res=>res.json()).then(({hasMore,data})=>{
				this.setState({
					hasMore,
					data:[...this.state.data,...data],
					isLoading:false//加载完成
				}) 
			})
		})
	}
	render(){
		return(
			<div>
				{
					this.state.data.length?
					<ListComponent data={this.state.data}/>:
					<div>正在加载。。。</div>
				}
				<LoadMore 
				hasMore={this.state.hasMore} 
				loadMoreData={this.loadMoreData.bind(this)} 
				isLoading={this.state.isLoading}></LoadMore>
			</div>
		)
	}
} 