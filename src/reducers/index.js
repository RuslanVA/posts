import updatePostList from './post-list';
import updateUserList from './user-list';
import updateCommentList from './comment-list';

const reducer = (state, action) => {
    return {
        postList: updatePostList(state, action),
        commentList: updateCommentList(state, action),
        userList: updateUserList(state, action)
    };
};


export default reducer;
