import SectionHeader from '@components/section-header.jsx';

import ProductList from './list.jsx';

function TodaysBestDeals() {
  return (
    <section className='container'>
      <SectionHeader>Most Selling Products</SectionHeader>
      <ProductList />
    </section>
  );
}

export default TodaysBestDeals;