import React from "react";
import { connect } from "react-redux";
import { selectCartItem } from "../store/cart/action";

const ProductCard = ({ product, selectCartItem, selectProduct }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={product.image_url} alt={product.product_name} />
      </div>
      <div className="content">
        <div className="header">{product.product_name}</div>
        <div className="meta">
          <i>Stock : {product.total}</i>
        </div>
         
        <div style={{ marginTop: "10px" }}>
          {product.discount > 0 && (
            <span className="ui right floated tag labels">
              <i className="ui red label">Discount {product.discount}%</i>
            </span>
          )}

          <span>
            <i className="dollar sign icon"></i>
            {`${product.product_price}K`}
          </span>
        </div>
      </div>
      <button
        class="ui bottom attached button"
        onClick={() => {
          selectCartItem(product);
        }}
      >
        <i className="add icon"></i>
        Tambah Item
      </button>
    </div>
  );
};

export default connect(null, { selectCartItem })(ProductCard);
