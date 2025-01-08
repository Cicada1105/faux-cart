import { useState } from 'react';

import { CategoryContext, CategoryDispatchContext } from './context.jsx';

import SectionHeader from '@components/section-header';
import Categories from './categories';
import Products from './products';

function ProductsFilter()  {
  const [categoryFilter, setCategoryFilter] = useState('');

  return (
    <section>
      <SectionHeader>Todays Best Deals For You!</SectionHeader>
      <CategoryContext.Provider value={categoryFilter}>
        <CategoryDispatchContext.Provider value={setCategoryFilter}>
          <div className='flex flex-col gap-12'>
            <Categories />
            <Products />
          </div>
        </CategoryDispatchContext.Provider>
      </CategoryContext.Provider>
    </section>
  )
}

export default ProductsFilter;