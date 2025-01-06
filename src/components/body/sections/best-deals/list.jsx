import { useState, useEffect } from 'react';

import ProductItem from './item.jsx';

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
      let bestDeals = [];
      const currentProducts = result.products;
      
      bestDeals = currentProducts.slice(0,5);
      console.log(bestDeals);
      /*let currIndex = 5;
      do {
        if ( currentProducts[currIndex].rating >= 4 ) {
          bestDeals.push(currentProducts[currIndex]);
        }

        currIndex++;
      } while( (bestDeals.length < TOTAL_PRODUCTS) && (currIndex <= currentProducts.length));*/

      setItems(bestDeals);
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