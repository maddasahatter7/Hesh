import React, { Component } from 'react';
import Post from '../../Post/components/Post';
import PostEditor from '../../PostEditor/components/PostEditor';

class ThreadDisplay extends components {
    render() {
        return (
            <div>
                {
                    this.state.posts.map((postBody, idx) => {
                        return (
                            <Post key={idx} postBody={postBody} />
                        )
                    })
                }
                <PostEditor addPost={this.addPost} />
            </div>
        );
    }
}
