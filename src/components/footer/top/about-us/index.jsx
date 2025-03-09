import { useState, useEffect } from 'react';

import ListItem from '../list-item.jsx';
import ListHeader from '../list-header.jsx';

function AboutUs() {
  const [aboutUsItems, setAboutUsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    <div className='text-center sm:text-left'>
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