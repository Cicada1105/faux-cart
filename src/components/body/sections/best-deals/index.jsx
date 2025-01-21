import SectionHeader from '@components/section-header.jsx';

import ProductList from './list.jsx';

function TodaysBestDeals() {
  return (
    <section className='container'>
      <SectionHeader>Today's Best Deals For You</SectionHeader>
      <ProductList />
    </section>
  );
}

export default TodaysBestDeals;