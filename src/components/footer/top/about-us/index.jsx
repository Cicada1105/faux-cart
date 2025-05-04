import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ListItem from '../list-item.jsx';
import ListHeader from '../list-header.jsx';

function AboutUs() {
  const [aboutUsItems, setAboutUsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const BASE_STYLE = 'transition duration-700 delay-200 text-center sm:text-left';
  const SLIDE_UP_STYLE = ' translate-y-0';
  const SLIDE_DOWN_STYLE = ' translate-y-1/4';
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  useEffect(() => {
    import('./data.json').then(result =>
      result.default
    ).then(data => {
      setAboutUsItems(data);
    }).catch(err => {
      console.log(err);
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  },[]);

  return (
    <div ref={ ref } className={ BASE_STYLE.concat( inView ? SLIDE_UP_STYLE : SLIDE_DOWN_STYLE ) }>
      <ListHeader>About Us</ListHeader>
      {
        loading ?
          <p>Loading...</p>
        :
          ( !error && aboutUsItems.length ) ?
            <ul className='text-sm/[200%]'>
            {
              aboutUsItems.map((aboutUsItem,i) =>
                <ListItem key={i}>{ aboutUsItem }</ListItem>
              )
            }
            </ul>
          :
            <p>Error retrieving items.</p>
      }
    </div>
  );
}

export default AboutUs;