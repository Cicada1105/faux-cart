import { useState, useEffect } from 'react';

import CategoryList from './list.jsx';

function Categories() {
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
    <div className='relative flex items-center'>
      {
        (categories && !error) ?
        <>
          <p className='peer hover:cursor-pointer'>Categories</p>
          <i className="fa-solid fa-chevron-down peer text-[1rem] py-1 hover:cursor-pointer hover:rotate-180 peer-hover:rotate-180"></i>
          <div className='hidden absolute top-6 bg-white shadow-lg p-4 peer-hover:block hover:block hover:pointer'>
            <a href='#' className='block w-100% pb-4 mb-4 border-b-[1px] border-gray-400 text-left'>Popular Categories</a>
            <CategoryList categories={categories} />
          </div>
        </>
        :
        <p>Trouble loading categories</p>
      }
    </div>
  )
}

export default Categories;