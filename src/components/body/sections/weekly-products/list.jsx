import { useState, useEffect } from 'react';

import ProductItem from '@components/product-item';

function ProductList() {
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  const TOTAL_PRODUCTS = 5;

  useEffect(() => {
    fetch('https://dummyjson.com/products').then(result =>
      result.json()
    ).then(result => {
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
        <div className='pb-8 hor-scrollbar overflow-x-scroll xl:overflow-auto'>
          <ul className='grid grid-cols-1 sm:grid-cols-5 sm:w-[200%] md:w-[140%] lg:w-[110%] xl:w-full gap-x-6 gap-y-4'>
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