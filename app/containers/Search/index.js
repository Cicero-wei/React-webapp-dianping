import React, { Component } from 'react';
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/SearchList'
export default class Search extends Component {
  render() {
    return (
      <div>
        <SearchHeader history={this.props.history} 
            search={this.search.bind(this)} 
            value={this.props.match.params.keyword || ''}
        />
        <SearchList id={this.props.match.params.keyword || '1'}/>
      </div>
    );
  }
  search(value){
      this.props.history.push('/search/all/'+value)
  }
}
