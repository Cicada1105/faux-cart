import { useState, useEffect } from 'react';

import ProductItem from '@components/product-item';
import ScrollWrapper from '@components/scroll-wrapper';
import TranslateObserver from '@components/translate-observer';

function ProductList() {
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  const TOTAL_PRODUCTS = 5;

  useEffect(() => {
    fetch('https://dummyjson.com/products').then(result =>
      result.json()
    ).then(result => {
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
        <ScrollWrapper>
          <TranslateObserver>
            <ul className='grid grid-cols-1 sm:grid-cols-5 sm:w-[200%] md:w-[140%] lg:w-[110%] xl:w-full gap-x-6 gap-y-4'>
              {
                items.map((item,i) => <ProductItem key={i} {...item} />)
              }
            </ul>
          </TranslateObserver>
        </ScrollWrapper>
      :
        <p>Error retrieving items.</p>
  );
}

export default ProductList;