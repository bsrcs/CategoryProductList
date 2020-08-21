import React, { Component } from "react"
import { ListGroup, ListGroupItem } from "reactstrap"

class CategoryList extends Component {
  state = {
    categories: []
  };

  // component yerlesti & categorileri "getCategories" ile doldur.
  componentDidMount(){
    this.getCategories();
  };

  // API'den datayi al, json formatina ceir, "categories" listesine ekle.
  getCategories = ()=> {
    fetch("http://localhost:3000/categories")
    .then(response => response.json())
    .then(data=>this.setState({categories:data}));
  };

  render() {
    return (
      <>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
        {this.state.categories.map(category => (
          <ListGroupItem onClick={() => this.props.changeCategory(category)}
          key={category.id}>{category.categoryName}</ListGroupItem>))}   
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </>
    )
  }
}

export default CategoryList
