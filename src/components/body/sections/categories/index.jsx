import SectionHeader from '@components/section-header.jsx';

import CategoriesList from './list.jsx';

function Categories() {
  return (
    <section className='container'>
      <SectionHeader>Shop Our Top Categories</SectionHeader>
      <CategoriesList />
    </section>
  )
}

export default Categories;