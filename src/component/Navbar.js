import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = (props) => {
  return (
    <div className="ui labeled icon menu ">
      <Link to="/" className="item">
        <i className="list icon"></i>
        Item List
      </Link>
      <Link to="/checkout" className="item right floted">
        <i className="shopping cart icon"></i>
        <span>
          Cart
          {props.cart.length > 0 && (
            <i className="ui mini red label">{props.cart.length}</i>
          )}
        </span>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
