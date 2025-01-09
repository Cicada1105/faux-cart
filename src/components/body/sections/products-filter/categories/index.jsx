import { useState, useEffect, useContext } from 'react';

import { CategoryContext, CategoryDispatchContext } from '../context.jsx';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const currCategoryFilter = useContext(CategoryContext);
  const dispatch = useContext(CategoryDispatchContext);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list').then(result =>
      result.json()
    ).then(categories => {
      categories.splice(categories.length / 2);
      dispatch(categories[0])
      setCategories(categories);
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
      (!error && categories.length) ?
        <ul className='flex flex-wrap gap-x-6 gap-y-4'>
        {
          categories.map((category, i) => 
            <li className={ category === currCategoryFilter ? 'btn-outline-inverse-dark' : 'btn-outline-dark' } key={i} onClick={() => dispatch(category)}>
              {category.slice(0,1).toUpperCase().concat(category.slice(1))}
            </li>
          )
        }
        </ul>
      :
        <p>Error retrieving categories</p>
  )
}

export default Categories;