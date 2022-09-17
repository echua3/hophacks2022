import React from 'react';
import ArticleComment from './ArticleComment';
import Col from 'react-bootstrap/Col';
import './style/CommentFeed.css';

function CommentFeed() {
  return (
    <div class='horizontal-center'>
        <Col>
            {[
            'User 1',
            'User 2',
            'User 3',
            'User 4',
            'User 5',
            'User 6',
            'User 7',
            'User 8',
            ].map((variant) => (
                <ArticleComment 
                    bg={variant.toLowerCase()}
                    key={variant}
                    className="mb-2"
                > {variant}
                </ArticleComment>
        ))}
        </Col>
    </div>
  );
}

export default CommentFeed;
