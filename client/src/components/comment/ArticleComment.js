import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style/ArticleComment.css';
import Emote from './Emote';

function ArticleComment(props) {
  return (
    <Card className="text-left" style={{ width: '25rem' }}>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>{props.header}</Card.Title>
        <Card.Text>
          {props.comment}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted" >
        <div className =".clearfix">
          <td>
          <Emote/>
          </td>
          <td>
          <Button variant="primary float-right">Go to article</Button>
          </td>
        </div>
      </Card.Footer>
    </Card>
  )
}

export default ArticleComment