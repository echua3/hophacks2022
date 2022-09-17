import React from 'react';
import ArticleComment from './ArticleComment';
import Col from 'react-bootstrap/Col';
import './style/CommentFeed.css';

function CommentFeed() {
  const posts = [
    {username: 'Jane Doe', header: 'Header 1', comment: 'This post is super cool!'},
    {username: 'John Smoe', header: 'Header 2', comment: 'Valid'},
    {username: 'Joe Fawn', header: 'Header 3', comment: 'He is really saying something'}
  ];
  return (
    <div class='horizontal-center'>
        <Col>
            {posts.map((post) => (
                <ArticleComment 
                  name = {post.username}
                  header = {post.header} 
                  comment = {post.comment}
                  // bg={post.toLowerCase()}
                  key={post}
                  className="mb-2"
                > {post}
                </ArticleComment>
        ))  }
        </Col>
    </div>
  );
}

export default CommentFeed;
