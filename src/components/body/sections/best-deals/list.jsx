import { useState, useEffect } from 'react';

import ProductItem from '@components/product-item';

import './style.css';

function ProductList() {
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products').then(result =>
      result.json()
    ).then(result => {
      const TOTAL_PRODUCTS = 5;
      let currentProducts = result.products;
      
      // Order products from biggest discount to least
      currentProducts.sort((prod1, prod2) =>
        prod1.discountPercentage > prod2.discountPercentage ? -1 : 1
      );

      // Remove everything after TOTAL_PRODUCTS 
      //  (ie. everything after product #5)
      currentProducts.splice(TOTAL_PRODUCTS);

      setItems(currentProducts);
    }).catch(e => {
      console.log(e);
      setError(true);
    }).finally(() => setLoading(false));
  },[])

  return (
    loading ? 
      <p>Loading...</p>
    :
      (!error && items.length) ?
        <div id='bestDeals' className='overflow-x-scroll pb-8'>
          <ul className='flex gap-x-6 w-max'>
            {
              items.map((item,i) => <ProductItem key={i} {...item} />)
            }
          </ul>
        </div>
      :
        <p>Error retrieving items.</p>
  );
}

export default ProductList;