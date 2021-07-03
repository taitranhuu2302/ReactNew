import React, { Component } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import AdminProduct from "./AdminProduct";
import * as actions from "./../../../../Actions/index";
import Pagination from "./Pagination";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 5,
    };
  }

  componentDidMount() {
    this.props.onGetProducts();
  }

  paginate = (number) => {
    this.setState({ currentPage: number });
  };

  listProduct = (products) => {
    return products.map((product, index) => {
      return <AdminProduct product={product} key={index} index={index} />;
    });
  };

  render() {
    var { products } = this.props;
    var { currentPage, postsPerPage } = this.state;
    var indexOfLast = currentPage * postsPerPage;
    var indexOfFirst = indexOfLast - postsPerPage;
    var currentList = products.slice(indexOfFirst, indexOfLast);

    return (
      <div className="container" id="home">
        <table className="table table-home table-striped table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Image</th>
              <th>Name Product</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="list-products ">
            {this.listProduct(currentList)}
          </tbody>
          <Pagination
            totalProduct={products.length}
            postsPerPage={postsPerPage}
            paginate={this.paginate}
          />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetProducts: () => {
      dispatch(actions.acFetchProductsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
