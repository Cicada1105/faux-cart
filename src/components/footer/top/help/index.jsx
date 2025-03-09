import { useState, useEffect } from 'react';

import ListItem from '../list-item.jsx';
import ListHeader from '../list-header.jsx';

function Help() {
  const [helpItems, setHelpItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    import('./data.json').then(result =>
      result.default
    ).then(data => {
      setHelpItems(data);
    }).catch(err => {
      console.log(err);
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  },[]);

  return (
    <div className='text-center sm:text-left'>
      <ListHeader>Help</ListHeader>
      {
        loading ?
          <p>Loading...</p>
        :
          ( !error && helpItems.length ) ?
            <ul className='font-normal text-sm/[200%]'>
            {
              helpItems.map((helpItem,i) =>
                <ListItem key={i}>{ helpItem }</ListItem>
              )
            }
            </ul>
          :
            <p>Error retrieving items.</p>
      }
    </div>
  );
}

export default Help;