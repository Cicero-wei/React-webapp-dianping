import React, { Component } from 'react';
import Star from '../../Star'
export default class CommentItem extends Component {
    render() {
        let {username,star,comment}=this.props.data
        return (
            <div className="comment-item">
                <div>
                    <i className="iconfont icon-people_fill"></i>
                    {username}
                </div>
                <Star count={star}/>
                <div>
                    {comment}
                </div>
            </div>
        );
    }
}
import './index.less'