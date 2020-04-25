import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions'
 
class PostsShow extends Component {
    
    ComponentDidMount() {
        const {id} = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    render() { 
        return (
            <div>
                Posts Show!
            </div>
          );
    }
}

function mapStateToProps({posts}, ownProps) {
    return {post:posts[ownProps.match.params.id]}
}
 
export default connect (mapStateToProps, {fetchPost}) (PostsShow);
