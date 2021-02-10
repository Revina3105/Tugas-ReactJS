import React from "react";
import { connect } from "react-redux";
import CartCard from "../component/CartCard";

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center", marginBottom: 40 }}>
          {this.props.cart.length < 1
            ? "Belum Memilih Item"
            : "List Item yang dipilih"}
        </h1>
        <div className="ui items">
          {this.props.cart.map((product) => {
            return <CartCard product={product} key={product.id} />;
          })}
        </div>
        <h1 style={{ float: "right" }}>
          Total Price : Rp.{" "}
          {this.props.cart.reduce(
            (prevVal, item) =>
              (prevVal += item.product_price * 1000 * item.counter),
            0
          )}
        </h1>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(CheckoutPage);
