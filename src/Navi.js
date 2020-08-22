import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import CartSummary from './CartSummary';
import {Link} from "react-router-dom"

class Navi extends Component {
  state ={
    isOpen:false
  }
  toggle = () => this.setState({isOpen:true});

  render(){
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="form1">Form Demo1</Link>
                </NavLink>
              </NavItem>
              <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navi;