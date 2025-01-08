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
      let currentProducts = result.products;

      /*
        Order by:
        Calculated Most Selling Products:
          stock / minimumOrderQuantity
            - # of stock determines if product is popular
            - minimum order quantity decides if stock is enough
      */
      currentProducts.sort((prod1, prod2) =>
        (prod1.stock / prod1.minimumOrderQuantity) > (prod2.stock / prod2.minimumOrderQuantity) ? -1 : 1
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
        <div className='pb-8 hor-scrollbar overflow-x-scroll xl:overflow-auto'>
          <ul className={`grid grid-cols-1 sm:grid-cols-${TOTAL_PRODUCTS} sm:w-[200%] md:w-[140%] lg:w-[110%] xl:w-full gap-x-6 gap-y-4`}>
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