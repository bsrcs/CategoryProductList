import React, { Component } from "react"
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap"


class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart-{this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge color="success">{" " + cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
  renderEmptyCart(){
    return(
      <NavItem>
        <NavLink>Empty Card</NavLink>
      </NavItem>
    )
  }
  // seppette eleman yoksa "Your Card" kismi gorunmesin.
  render() {
    return <>
    {this.props.cart.length>0 ? this.renderSummary() : this.renderEmptyCart()}
    </>
  }
}

export default CartSummary
