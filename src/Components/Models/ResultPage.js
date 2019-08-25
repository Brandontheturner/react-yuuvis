import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export class ResultPage extends Component {
  render() {
    return (
      <div class='container'>
        <div class='row'>
          <div class='col-sm'>
            <Card style={{ width: "12rem" }}>
              <Card.Img
                variant='top'
                src='https://images.pexels.com/photos/2474014/pexels-photo-2474014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt='Card Image'
              />
              <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>Image Text</Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>
                  <i class='fa fa-map-marker'></i>
                  Location
                </ListGroupItem>
                <ListGroupItem>Relevant Words</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href='#'>Card Link</Card.Link>
                <Card.Link href='#'>Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div class='col-sm'>
            <Card style={{ width: "12rem" }}>
              <Card.Img
                variant='top'
                src='https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt='Card Image'
              />
              <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>Image Text</Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>Location</ListGroupItem>
                <ListGroupItem>Relevant Words</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href='#'>Card Link</Card.Link>
                <Card.Link href='#'>Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div class='col-sm'>
            <Card style={{ width: "12rem" }}>
              <Card.Img
                variant='top'
                src='https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt='Card Image'
              />
              <Card.Body>
                <Card.Title>Images</Card.Title>
                <Card.Text>Image Text</Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>Location</ListGroupItem>
                <ListGroupItem>Relevant Words</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href='#'>Images</Card.Link>
                <Card.Link href='#'>Image Links</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultPage;
