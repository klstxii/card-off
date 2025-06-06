import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom' 

const BASE_URL = import.meta.env.VITE_API_URL;

function Product({product}) {

  return (
    <Card className='my-3 p-3 rounded fixed-card'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={`${BASE_URL}${product.image}`} />
        </Link>

        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>

            <Card.Text as="div">
                <div className='my-3'>
                    {product.rating} from {product.numReviews} reviews
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                </div>
            </Card.Text>

            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product