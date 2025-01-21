import SectionHeader from '@components/section-header.jsx';

import ProductList from './list.jsx';

function WeeklyProducts() {
  return (
    <section className='container'>
      <SectionHeader>Weekly Popular Products</SectionHeader>
      <ProductList />
    </section>
  );
}

export default WeeklyProducts;