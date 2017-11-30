import React,{Component} from 'react';
import {getComment} from '../../../fetch/detail';
import CommentComponent from '../../../components/CommentComponent'
import LoadMore from '../../../components/LoadMore'
export default class Comment extends Component {
    constructor(){
        super(...arguments);
        this.state={
            hasMore:true,
            data:[],
            page:0,
            isLoading:true
        }
    }
    componentDidMount(){
       this.processData(getComment(this.props.id,0)) 
    }
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:[...this.state.data,...data],
                isLoading:false
            })
        })
    }
    loadMore(){
        this.setState({
            isLoading:true,
            page:this.state.page+1
        },()=>{
            this.processData(getComment(this.props.id,this.state.page)) 
        })
    }
    render() {
        return (
            <div>
                {this.state.data.length?
                <CommentComponent data={this.state.data}/>:
                <div>正在加载。。。</div> }
                <LoadMore isLoading={this.state.isLoading} 
                hasMore={this.state.hasMore}
                loadMoreData={this.loadMore.bind(this)}
                />
            </div>
        );
    }
}