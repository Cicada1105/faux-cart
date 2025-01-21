import SectionHeader from '@components/section-header';

import TrendingProductsList from './list.jsx';

function TrendingProducts() {
  return (
    <section className='container'>
      <SectionHeader>Trending Products For You</SectionHeader>
      <TrendingProductsList />
    </section>
  );
}

export default TrendingProducts;