import {Name, Price, ProductCardContainer, Footer} from './product-card.style.jsx'
import React, {useContext} from 'react'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import { CartContext } from '../../context/card.context'

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext)
    const {name, price, imageUrl} = product;
    const addProductToCart = () => addItemToCart(product);
    
  return (
    <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} 
        onClick={addProductToCart}>Add to card</Button>
    </ProductCardContainer>
  )
}

export default ProductCard