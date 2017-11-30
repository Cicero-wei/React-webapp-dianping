import React, { Component } from 'react';
import SearchInput from '../SearchInput'
export default class SearchHeader extends Component {
  render() {
    return (
      <div className="back search-header">
        <i className="iconfont icon-return" onClick={this.back.bind(this)}></i>
        <div>
            <SearchInput value={this.props.value} search={this.props.search}/>
        </div>
      </div>
    );
  }
  back(){
      this.props.history.go(-1)
  }
}
import './index.less'