const updatePostList = (state, action) => {

  if (state === undefined) {
    return {
      posts: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {
        posts: [],
        loading: true,
        error: null
      };

    case 'FETCH_POSTS_SUCCESS':
      return {
        posts: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_POSTS_FAILURE':
      return {
        posts: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.postList;
  }
};

export default updatePostList;
