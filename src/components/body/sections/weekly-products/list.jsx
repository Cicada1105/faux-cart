import { useState, useEffect } from 'react';

import ProductItem from '@components/product-item.jsx';

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
      const weeklyProducts = [];
      const currentProducts = result.products;
      
      let currIndex = 0;
      do {
        if ( currentProducts[currIndex].rating >= 4 ) {
          weeklyProducts.push(currentProducts[currIndex]);
        }

        currIndex++;
      } while( (weeklyProducts.length < TOTAL_PRODUCTS) && (currIndex <= currentProducts.length));

      setItems(weeklyProducts);
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
        <div id='weeklyProducts' className='overflow-x-scroll pb-8'>
          <ul className='flex gap-x-6 w-max'>
            {
              items.map((item,i) => {
                let { discountPercentage, ...restOfItem } = item;
                return <ProductItem key={i} {...restOfItem} />
              })
            }
          </ul>
        </div>
      :
        <p>Error retrieving items.</p>
  );
}

export default ProductList;