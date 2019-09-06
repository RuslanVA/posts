import React, {Fragment} from 'react';
import PostItem from "../post-item";


const PostPage = ({itemId}) => {
    return (
        <Fragment>
            <PostItem itemId={itemId}/>
        </Fragment>

    );
};

export default PostPage;