import React, { Component } from "react"
import Navi from "./Navi"
import ProductList from "./ProductList"
// reactstrap kullanarak satir ve sutunlar olustur.
import { Container, Row, Col } from "reactstrap"
import CategoryList from "./CategoryList"

class App extends Component {
  state = {
    currentCategory: "",
    products: []
  }
  componentDidMount() {
    this.getProducts()
  }
  // CategoryList'deki changeCategory'yi burada yazdim. Cunku bu fonk.su ProductList'de de kullanmak istiyorum.
  // React'da bu iki component arasinda veri tasima yok.
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
     // kategoriye tikladigimda ilgili urunlerin ona gore listelenmesini istiyorum.
     // yani kategoriye tikladigimda "getProducts" bir kez daha calisacak.
    this.getProducts(category.id)
  }

  // API'den datayi al, json formatina cevir, "products" listesine ekle.
  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    // "categoryId" parametre olarak gonderildiyse yani "defined" ise 
    // gonderilen "categoryId" yi Url'e ekle.
    if(categoryId){
      url += "?categoryId=" + categoryId; 
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
  }

  render() {
    // datayi object seklinde tutarsam daha sonra eklemem gereken bir props olursa
    // objecin icine yazarim.
    let categoryInfo = { title: "Category List" }
    let productInfo = { title: "Product List" }
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              {/* "changeCategory" fonk.u "CategoryList"'de tiklanabilsin diye bu eventi oraya degisken olarak gonderdim. */}
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              {/* props ile products stateiını yolla. */}
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
