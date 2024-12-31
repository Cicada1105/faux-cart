import { useState, useEffect } from 'react';

import DiscountItem from './item.jsx';

function DiscountList() {
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  useEffect(() => {
    import('./data.json').then(data => 
      data.default
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
        <ul className='flex flex-wrap justify-around gap-x-6 gap-y-4'>
          {
            items.map((item,i) => <DiscountItem key={i} {...item} />)
          }
        </ul>
      :
        <p>Error retrieving items.</p>
  );
}

export default DiscountList;