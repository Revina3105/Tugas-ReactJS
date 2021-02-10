import React from "react";
import { connect } from "react-redux";

import SearchBar from "../component/SearchBar";
import ProductCard from "../component/ProductCard";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }
  render() {
    return (
      <>
        <SearchBar
          inputHandler={(e) => {
            this.setState({
              searchQuery: e.target.value,
            });
          }}
        />
        <div className="ui link cards" style={{ marginTop: "20px" }}>
          {this.props.products
            .filter((product) =>
              product.product_name
                .toUpperCase()
                .includes(this.state.searchQuery.toUpperCase())
            )
            .map((product, index) => {
              return <ProductCard product={product} key={index} />;
            })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(ProductPage);
