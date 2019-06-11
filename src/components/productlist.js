import React from 'react';
import { Button } from 'react-bootstrap';
import '../css/productlist.css';


const ProductList = (props) => {
    return (
        <div className="Product-list">
            { props.products.map(product => (
                <>
                <li className="product-item" key={product.id}>
                   $ {product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </li>
                    <Button 
                        onClick={() => props.onProductBuy(0)}
                        variant="info" 
                        key={product.id}
                    >
                    Add to Cart
                    </Button>
                </>
            )
                ) }  

        </div>
    )
}


export default ProductList;