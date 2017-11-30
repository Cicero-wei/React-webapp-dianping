import React, { Component } from 'react';
import {getInfo} from '../../../fetch/detail/index.js'
import InfoComponent from '../../../components/InfoComponent'
export default class Info extends Component {
    constructor(){
        super();
        this.state={
            data:false
        }
    }
    componentDidMount(){
        getInfo(this.props.id).then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.data?<InfoComponent data={this.state.data}></InfoComponent>:<div>正在加载。。。</div>  
                }
            </div>
        );
    }
}
