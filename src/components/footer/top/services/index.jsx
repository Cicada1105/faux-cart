import { useState, useEffect } from 'react';

import ListItem from '../list-item.jsx';
import ListHeader from '../list-header.jsx';

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    import('./data.json').then(result =>
      result.default
    ).then(data => {
      setServices(data);
    }).catch(err => {
      console.log(err);
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  },[]);

  return (
    <div className='text-center sm:text-left'>
      <ListHeader>Services</ListHeader>
      {
        loading ?
          <p>Loading...</p>
        :
          ( !error && services.length ) ?
            <ul className='font-normal text-sm/[200%]'>
            {
              services.map((service,i) =>
                <ListItem key={i}>{ service }</ListItem>
              )
            }
            </ul>
          :
            <p>Error retrieving items.</p>
      }
    </div>
  );
}

export default Services;