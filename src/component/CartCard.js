import React, { Component } from "react";
import { connect } from "react-redux";
import { addCartItem, deleteCartItem } from "../store/cart/action";
import { deselectProduct } from "../store/products/action";

class CartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.product.counter,
    };
  }
  handleAddItem() {
    if (this.state.counter < this.props.product.total) {
      this.setState({ counter: this.state.counter + 1 });
      this.props.addCartItem(this.props.product.id);
    }
  }
  handleDecreaseitem() {
    if (this.state.counter > 1) {
      this.setState({ counter: this.state.counter - 1 });
    } 
    this.props.deleteCartItem(this.props.product.id);
  }
  render() {
    const priceProduct = this.props.product.product_price * 1000 * this.state.counter
    return (
      <div className="item">
        <div className="image">
          <img
            src={this.props.product.image_url}
            alt={this.props.product.product_name}
          />
        </div>
        <div className="content">
          <span className="header">{this.props.product.product_name}</span>
          <div className="meta">
            <span className="cinema">
              <i
                className="ui red label"
                style={{ opacity: this.props.product.discount > 0 ? 1 : 0 }}
              >
                Discount {this.props.product.discount}%
              </i>
              <span
                className="ui large right floated"
                style={{ color: "black", fontSize: "1.2em" }}
              >
                Rp.
                {priceProduct.toLocaleString()}
              </span>
            </span>
          </div>
          <div className="description">
            <p> </p>
          </div>
          <div className="extra">
            <div className="ui right floated">
              <button
                className="ui large label"
                onClick={this.handleDecreaseitem.bind(this)}
              >
                <i className="minus square icon" style={{ margin: 0 }}></i>
              </button>
              <div className="ui input">
                <input
                  type="text"
                  placeholder="item"
                  value={this.state.counter}
                  style={{ maxWidth: 60 }}
                />
              </div>
              <button
                className="ui large label"
                onClick={this.handleAddItem.bind(this)}
              >
                <i className="plus square icon" style={{ margin: 0 }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addCartItem, deleteCartItem, deselectProduct })(
  CartCard
);
