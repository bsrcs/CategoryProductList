import React, { Component } from 'react';

class FormDemo1 extends Component {
  state={userName:"", city:""}
  onChangeHandler = (event) => {
    // birden fazla form nesnesinin name ve value degerleri alinir.
    let name = event.target.name;
    let value = event.target.value;
    // input icindeki name degeri state ile ayni olmalidir.
    this.setState({[name]: value});
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.userName);
  }
  // amacim userName'i inputa baglamak.
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <h3>User Name</h3>
        <input name="userName" onChange={this.onChangeHandler} type="text"></input>
        <h3>User name is {this.state.userName}</h3>

        <h3>City</h3>
        <input name="city" onChange={this.onChangeHandler} type="text"></input>
        <h3>User name is {this.state.city}</h3>
        <input type="submit" value="Save"></input>
      </form>
    );
  }
}

export default FormDemo1;