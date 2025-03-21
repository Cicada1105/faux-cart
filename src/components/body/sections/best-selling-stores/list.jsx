import { useState, useEffect } from 'react';

import StoreItem from './item.jsx';

function StoreList() {
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  const TOTAL_PRODUCTS = 5;
  
  useEffect(() => {
    import('./data.json').then(mod =>
      mod.default
    ).then(items => {
      setItems(items);
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
        <ul className='grid gap-x-6 gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          {
            items.map((item,i) => <StoreItem key={i} {...item} /> )
          }
        </ul>
      :
        <p>Error retrieving items.</p>
  );
}

export default StoreList;