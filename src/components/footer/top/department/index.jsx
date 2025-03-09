import { useState, useEffect } from 'react';

import ListItem from '../list-item.jsx';
import ListHeader from '../list-header.jsx';

function Department() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    import('./data.json').then(result =>
      result.default
    ).then(data => {
      setDepartments(data);
    }).catch(err => {
      console.log(err);
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  },[]);

  return (
    <div className='text-center sm:text-left'>
      <ListHeader>Department</ListHeader>
      {
        loading ?
          <p>Loading...</p>
        :
          ( !error && departments.length ) ?
            <ul className='font-normal text-sm/[200%]'>
            {
              departments.map((department,i) =>
                <ListItem key={i}>{ department }</ListItem>
              )
            }
            </ul>
          :
            <p>Error retrieving items.</p>
      }
    </div>
  );
}

export default Department;