import React, { Fragment } from 'react';
import './post-list-item.css';

import { Link } from 'react-router-dom';

const PostListItem = ({ post }) => {
  const { title, userId, id } = post;
  return (
    <Fragment>
      <h4>{title}</h4>
        <p className="btn btn-secondary"><Link to={`/post-page/${id}`}>Read more</Link></p>
        <p className="btn btn-warning"><Link to={`/user-page/${userId}`}>User link</Link></p>
    </Fragment>
  );
};

export default PostListItem;
