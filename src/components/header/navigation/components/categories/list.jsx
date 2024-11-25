import { useState, useEffect } from 'react';

import CategoryItem from './item.jsx';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products').then(async (result) => {
      const data = await result.json();
      let obj = {};
      data['products'].forEach(product => {
        let cat = product['category'];

        if ( cat in obj ) {
          obj[cat]['total'] += 1
        }
        else {
          obj[cat] = {
            name: cat,
            thumbnail: product['thumbnail'],
            total: 1
          }
        }
      });

      setCategories(Object.values(obj));
    }).catch(e => {
      setError(e);
    })
  },[]);

  return (
    (categories && !error) ?
      <ul className='grid gap-8 grid-cols-[max-content_max-content]'>
      {
        categories.map((category,i) => 
          <CategoryItem key={i} category={category} />
        )
      }
      </ul>
      : <p>Trouble loading categories</p>
  )
}

export default CategoryList;