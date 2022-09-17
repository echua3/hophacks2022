import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ArticleComment() {
  return (
    <Card className="text-left">
      <Card.Header>User</Card.Header>
      <Card.Body>
        <Card.Title>Awesome Article</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, elementum eu euismod sit amet, semper non diam. Mauris nec viverra eros. Mauris rhoncus, diam nec viverra malesuada, tortor ante egestas libero, quis iaculis diam nibh at quam. Donec sed nulla consectetur, maximus augue id, blandit sapien. Mauris condimentum.
        </Card.Text>
        <Button variant="primary">Go to article</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  )
}

export default ArticleComment