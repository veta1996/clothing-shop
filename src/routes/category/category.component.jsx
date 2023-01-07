import {CategoryContainer, CategoryTitle} from './category.styles.jsx'
import {React, useContext, useState, useEffect, Fragment} from 'react'
import { useParams } from 'react-router-dom'

import { CategoriesContext } from '../../context/categories.context'
import ProductCard from '../../components/product-card/product-card.component'

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])
    console.log(category, categoriesMap)
    console.log(products, 'products')

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
    <CategoryContainer>
        { products && 
        products.map((product) => <ProductCard product={product} key={product.id}/>)
        }
    </CategoryContainer>
    </Fragment>
  )
}

export default Category