import { useState, useEffect } from 'react';

import BrandItem from './item.jsx';

function BrandList() {
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonblob.com/api/jsonBlob/1311109444679163904',{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => 
      res.json()
    ).then(result => {
      setLoading(false);
      setBrands(result);
    }).catch(e => setError(true));
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