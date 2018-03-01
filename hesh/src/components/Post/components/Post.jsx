import React from 'react';
import '../styles/Post.css';

const Post = (props) => (
    <div className="panel panel-default panel-post">
        <div className="panel-body">
           { props.postBody }
        </div>
    </div>  
);

export default Post;