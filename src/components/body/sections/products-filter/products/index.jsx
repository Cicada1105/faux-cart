import { useEffect, useState, useContext } from 'react';

import { CategoryContext } from '../context.jsx';

import ProductItem from '@components/product-item';
import ScaleObserver from '@components/scale-observer';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const currCategoryFilter = useContext(CategoryContext);

  const PRODUCT_LIMIT = 8;
  useEffect(() => {
    let url = '';
    if (currCategoryFilter) {
      url = `https://dummyjson.com/products/category/${currCategoryFilter}`;
    }
    else {
      url = 'https://dummyjson.com/products';
    }

    // Limit the number of results
    url += `?limit=${PRODUCT_LIMIT}`;

    fetch(url).then(result =>
      result.json()
    ).then(data => {
      setProducts(data.products);
    }).catch(err => {
      console.log(err);
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  },[currCategoryFilter]);

  return (
    loading ? 
      <p>Loading...</p>
    :
      (!error && products.length) ?
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4'>
        {
          products.map((product,i) => {
            let { discountPercentage, ...restOfProduct } = product;

            return (
              <ScaleObserver key={i}>
                <ProductItem {...restOfProduct} />
              </ScaleObserver>
            )
          })
        }
        </ul>
      :
        <p>Error retrieving products</p>
  )
}

export default Products;