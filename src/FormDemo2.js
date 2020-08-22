import React, { Component } from "react"
import alertify from "alertifyjs"
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap"

class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" }

  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value

    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alertify.success(this.state.email + " successfully submitted.")
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            onChange={this.handleChange}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="passowrd"
            placeholder="Enter password"
            onChange={this.handleChange}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Enter description"
            onChange={this.handleChange}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="select"
            name="city"
            id="city"
            onChange={this.handleChange}
          >
            <option>Istanbul</option>
            <option>Ankara</option>
            <option>Bursa</option>
            <option>Izmir</option>
          </Input>
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    )
  }
}

export default FormDemo2
