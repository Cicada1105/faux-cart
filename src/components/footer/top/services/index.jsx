import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ListItem from '../list-item.jsx';
import ListHeader from '../list-header.jsx';

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const BASE_STYLE = 'transition duration-700 delay-300 text-center sm:text-left';
  const SLIDE_UP_STYLE = ' translate-y-0';
  const SLIDE_DOWN_STYLE = ' translate-y-1/4';
  const { ref, inView } = useInView({
    triggerOnce: true
  });

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
    <div ref={ ref } className={ BASE_STYLE.concat( inView ? SLIDE_UP_STYLE : SLIDE_DOWN_STYLE ) }>
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