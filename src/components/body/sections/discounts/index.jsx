import SectionHeader from '@components/section-header.jsx';

import DiscountList from './list.jsx';

function Discounts() {
  return (
    <section className='container'>
      <SectionHeader>Get Up To 70% Off</SectionHeader>
      <DiscountList />
    </section>
  );
}

export default Discounts;