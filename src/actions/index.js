
const postsRequested = () => {
    return {
        type: 'FETCH_POSTS_REQUEST'
    }
};

const postsLoaded = (newPosts) => {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        payload: newPosts
    };
};

const postsError = (error) => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error
    };
};

const usersRequested = () => {
    return {
        type: 'FETCH_USERS_REQUEST'
    }
};

const usersLoaded = (newUsers) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: newUsers
    };
};

const usersError = (error) => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error
    };
};

const commentsRequested = () => {
    return {
        type: 'FETCH_COMMENTS_REQUEST'
    }
};

const commentsLoaded = (newComments) => {
    return {
        type: 'FETCH_COMMENTS_SUCCESS',
        payload: newComments
    };
};

const commentsError = (error) => {
    return {
        type: 'FETCH_COMMENTS_FAILURE',
        payload: error
    };
};




const fetchPosts = (postsService, dispatch) => () => {
    dispatch(postsRequested());
    postsService.getPosts()
        .then((data) => dispatch(postsLoaded(data)))
        .catch((err) => dispatch(postsError(err)));
};

const fetchUsers = (postsService, dispatch) => () => {
    dispatch(usersRequested());
    postsService.getUsers()
        .then((data) => dispatch(usersLoaded(data)))
        .catch((err) => dispatch(usersError(err)));
};

const fetchComments = (postsService, dispatch) => () => {
    dispatch(commentsRequested());
    postsService.getComments()
        .then((data) => dispatch(commentsLoaded(data)))
        .catch((err) => dispatch(commentsError(err)));
};

export {
    fetchPosts, fetchUsers, fetchComments
};
