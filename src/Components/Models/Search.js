import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Search extends Component {
  constructor() {
    super();
    this.state = { imageQuery: "", metadata: {} };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(this.state.imageQuery);
    this.setState({ imageQuery: e.target.value });
    console.log(this.state.imageQuery);
  }
  handleSubmit(e) {
    console.log(this.state.imageQuery);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Search Here</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type='text'
              placeholder='Search Images'
              defaultValue=''
            />
          </Form.Group>
          <Link className='nav-link' to={"/search/" + this.state.imageQuery}>
            <Button variant='dark' type='submit'>
              Search
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}

export default Search;
