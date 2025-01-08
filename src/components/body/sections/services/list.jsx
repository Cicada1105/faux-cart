import { useEffect, useState } from 'react';

import Service from './item.jsx';

function ServicesList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    import('./data.json').then(data => 
      data.default
    ).then(services => {
      setServices(services);
    }).catch(err => {
      console.log(err);
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  },[]);
  return (
    loading ? 
      <p>Loading...</p>
    :
      (!error && services.length) ?
        <ul className='grid gap-x-6 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {
            services.map((service,i) => <Service key={ i } {...service} />)
          }
        </ul>
      :
        <p>Error retrieving services</p>
  );
}

export default ServicesList;