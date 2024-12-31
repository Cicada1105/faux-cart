import { useState, useEffect } from 'react';

import BrandItem from './item.jsx';

function BrandList() {
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import('./data.json').then(mod => 
      mod.default
    ).then(brands => {
      setBrands(brands);
    }).catch(e => {
      setError(true);
    }).finally(() => setLoading(false));
  },[]);

  return (
    loading ? 
      <p>Loading...</p>
    :
      (!error && brands.length) ?
        <ul className='grid grid-cols-2 gap-y-4 gap-x-8'>
          {
            brands.map((brand,i) => <BrandItem key={i} {...brand} />)
          }
        </ul>
      :
        <p>Error retrieving brands.</p>
  );
}

export default BrandList;