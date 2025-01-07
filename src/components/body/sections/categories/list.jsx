import { useEffect, useState } from 'react';

import CategoryItem from './item.jsx';

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories').then(data =>
      data.json()
    ).then(categories => {
      // Remove everything after the 6th element
      categories.splice(6);

      Promise.all(
        categories.map(async (category) => {
          const NUM_OF_PRODUCTS = 5;
          let categoryObj = {
            name: category['name']
          }

          let url = new URL(category['url']);
          let searchParams = new URLSearchParams({
            limit: NUM_OF_PRODUCTS,
            select: 'thumbnail'
          });

          let data = await fetch(`${url}?${searchParams}`)
          let result = await data.json();
          // Select a random product to retrieve a thumbnail for the category
          let { thumbnail } = result['products'][Math.floor(Math.random() * NUM_OF_PRODUCTS)];

          categoryObj.image = thumbnail;

          return categoryObj;
        })
      ).then((cats) => {
        setCategories(cats);
      }).catch(err => {
        console.log(err);
        setError(true);
      });
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
        <ul className='grid gap-x-6 gap-y-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
        {
          categories.map((category, i) => <CategoryItem key={i} {...category} />)
        }
        </ul>
      :
        <p>Error retrieving categories.</p>
  );
}

export default CategoriesList;