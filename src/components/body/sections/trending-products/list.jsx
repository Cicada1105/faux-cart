import { useState, useEffect } from 'react';

import ProductItem from './item';

function TrendingProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    import('./data.json').then(result =>
      result.default
    ).then(data => {
      setProducts(data);
    }).catch(err => {
      console.log(err);
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  },[]);

  return (
    loading ? 
      <p>Loading</p>
    :
      (!error && products.length) ?
        <ul className='flex flex-col sm:flex-row gap-6'>
        {
          products.map((product, i) => <ProductItem key={i} {...product} />)
        }
        </ul>
      :
        <p>Error retrieving products</p>
  );
}

export default TrendingProductsList;