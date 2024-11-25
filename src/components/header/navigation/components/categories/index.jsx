import { Suspense, lazy } from 'react';

const CategoryList = lazy(() => import('./list.jsx'));

function Categories() {

  return (
    <div className='relative flex items-center'>
      <p className='peer hover:cursor-pointer'>Categories</p>
      <i className="fa-solid fa-chevron-down peer text-[1rem] py-1 hover:cursor-pointer hover:rotate-180 peer-hover:rotate-180"></i>
      <div className='hidden absolute top-6 bg-white shadow-lg p-4 peer-hover:block hover:block hover:pointer'>
        <a href='#' className='block w-100% pb-4 mb-4 border-b-[1px] border-gray-400 text-left'>Popular Categories</a>
        <Suspense fallback={<p>Loading...</p>}>
          <CategoryList />
        </Suspense>
      </div>
    </div>
  )
}

export default Categories;