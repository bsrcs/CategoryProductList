import React, { Component } from "react"
import { Table } from "reactstrap"

class CartList extends Component {
  renderCart() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Prioduct Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
  render() {
    return <div>
    {this.renderCart()}
    </div>
  }
}

export default CartList
