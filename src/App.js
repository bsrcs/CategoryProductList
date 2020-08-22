import React, { Component } from "react"
import Navi from "./Navi"
import ProductList from "./ProductList"
// reactstrap kullanarak satir ve sutunlar olustur.
import { Container, Row, Col } from "reactstrap"
import CategoryList from "./CategoryList"
import alertify from "alertifyjs"
import { Switch, Route } from "react-router-dom"
import NotFound from "./NotFound"
import CartList from "./CartList"
import FormDemo1 from "./FormDemo1"

class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
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
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products"
    // "categoryId" parametre olarak gonderildiyse yani "defined" ise
    // gonderilen "categoryId" yi Url'e ekle.
    if (categoryId) {
      url += "?categoryId=" + categoryId
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }))
  }

  // product listten secilen urunun adini ve miktarini al.
  addToCart = (product) => {
    let newCart = this.state.cart
    // eger urun onceden secilip sepete konulduysa sadece miktarini artir.
    var addedItem = newCart.find(
      (cartItem) => cartItem.product.id === product.id
    )
    if (addedItem) {
      addedItem.quantity += 1
    }
    // eger urun onceden secilmediyse newCart'a product ve quantity ata.
    else {
      newCart.push({ product: product, quantity: 1 })
    }
    this.setState({ cart: newCart })
    // kullaniciya seepete eklenen urun hakkinda bilgi ver.
    alertify.success(product.productName + " added to cart.", 1)
  }

  removeFromCart = (product) => {
    // sepetteki her bir eleman icin, gondermis oldugum id'nin disindakileri filtre.
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id)
    this.setState({ cart: newCart })
    alertify.error(product.productName + " removed from cart.", 1)
  }

  render() {
    // datayi object seklinde tutarsam daha sonra eklemem gereken bir props olursa
    // objecin icine yazarim.
    let categoryInfo = { title: "Category List" }
    let productInfo = { title: "Product List" }
    return (
      <div className="App">
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
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
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  )}
                ></Route>
                 <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                ></Route>
                <Route path="/form1" component={FormDemo1}></Route>
                <Route component={NotFound}></Route>
              </Switch>
              {/* props ile products stateiını yolla. */}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
