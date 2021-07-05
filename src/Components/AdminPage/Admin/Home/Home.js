import React, { Component } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import AdminProduct from "./AdminProduct";
import * as actions from "./../../../../Actions/index";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 5,
      keyword: '',
    };
  }

  componentDidMount() {
    this.props.onGetProducts();
  }

  paginate = (number) => {
    this.setState({ currentPage: number });
  };

  onDeleteProduct = (id) => {
    this.props.onDeleteProduct(id);
  };

  listProduct = (products) => {
    return products.map((product, index) => {
      return (
        <AdminProduct
          product={product}
          onChangeStatus={this.onChangeStatus}
          key={index}
          index={index}
          onDeleteProduct={this.onDeleteProduct}
        />
      );
    });
  };

  render() {
    const { products } = this.props;
    var { currentPage, postsPerPage } = this.state;
    var indexOfLast = currentPage * postsPerPage;
    var indexOfFirst = indexOfLast - postsPerPage;
    
    var currentList = products.slice(indexOfFirst, indexOfLast);
    return (
      <div className="container" id="home">
        <div className="title text-center font-family-Ad  my-4">
          <h1 className="">LIST OF PRODUCTS</h1>
        </div>
        <div className="table-content">
          <SearchBar  />
          <table className="table border table-home table-striped table-hover">
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
          </table>
        </div>

        <div className="bottom d-flex justify-content-between">
          <Pagination
            totalProduct={products.length}
            postsPerPage={postsPerPage}
            paginate={this.paginate}
          />
          <Link
            to="/admin/add-products"
            className="btn add-product bg-primary text-white"
          >
            Add Product
          </Link>
        </div>
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
    onDeleteProduct: (id) => {
      dispatch(actions.acDeleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
