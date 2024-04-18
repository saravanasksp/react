
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

function ProductList({ products, fetchProducts }) {
  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, [fetchProducts]);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
