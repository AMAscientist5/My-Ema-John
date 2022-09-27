import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({handleAddToCart, product}) => {
    // const {handleAddToCart, product} = props;
    const {name, price, ratings, seller, img} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
          <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p> Price: ${price}</p>
                <p> Seller: {seller}</p>
                <p><small> Ratings: {ratings} Starts </small></p>
          </div>
          <button onClick={() => handleAddToCart(product) } className='btn-cart' >
            <p className='btn-text'>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Product;