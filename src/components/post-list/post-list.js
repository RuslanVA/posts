import React, { Component } from 'react';
import PostListItem from '../post-list-item';

import { connect } from 'react-redux';

import { withService } from '../hoc';
import { fetchPosts } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './post-list.css';

const PostList = ({ posts }) => {
    return (
        <ul className="post-list">
            {
                posts.map((post) => {
                    return (
                        <li className="list-group-item list-group-item-action" key={post.id}>
                            <PostListItem
                                post={post}/>
                        </li>
                    );
                })
            }
        </ul>
    );
};

class PostListContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts, loading, error } = this.props;


        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }
        return <PostList posts={posts}/>;
    }
}

const mapStateToProps = ({ postList: { posts, loading, error }}) => {
    return { posts, loading, error };
};

const mapDispatchToProps = (dispatch, { postsService }) => {

    return {
        fetchPosts: fetchPosts(postsService, dispatch)
    };
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PostListContainer);
