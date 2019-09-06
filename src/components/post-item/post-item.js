import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withService } from '../hoc';
import { fetchPosts, fetchComments } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './post-item.css';

const PostItem = ({ posts, comments, itemId }) => {
    return (
        <div>
            {
                posts.map((post) => {
                    const { title, id, body} = post;

                    if (id === Number(itemId)) {
                        return (
                            <div key={post.id} className="card text-white bg-primary mb-3">
                                <h2 className="card-header">{title}</h2>
                                <div className="card-body">
                                    <p className="card-text">{body}</p>
                                </div>
                                {
                                    comments.map((comment) => {
                                        const { postId, name, body, email} = comment;

                                        if (id === Number(postId)) {
                                            return (
                                                <div key={comment.id} className="card text-white bg-secondary mb-3">
                                                    <p className="card-header">{email}</p>
                                                    <div className="card-body">
                                                        <p className="card-title">{name}</p>
                                                        <p className="card-text">{body}</p>
                                                    </div>
                                                </div>
                                            )
                                        } else return null
                                    })
                                }
                            </div>
                        );
                    } else return null
                })
            }

        </div>
    );
};

class PostItemContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchComments();
    }

    render() {
        const { posts, loading, error, comments } = this.props;


        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }
        return <PostItem posts={posts} comments={comments} itemId={this.props.itemId}/>;
    }
}

const mapStateToProps = ({ postList: { posts }, commentList: { comments, loading, error }}) => {
    return { posts, loading, error, comments };
};

const mapDispatchToProps = (dispatch, { postsService }) => {

    return {
        fetchPosts: fetchPosts(postsService, dispatch),
        fetchComments: fetchComments(postsService, dispatch)
    };
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PostItemContainer);
