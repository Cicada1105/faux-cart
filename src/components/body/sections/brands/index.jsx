import SectionHeader from '@components/section-header.jsx';

import BrandList from './list.jsx';

function Brands() {
  return (
    <section className='container'>
      <SectionHeader>Choose By Brand</SectionHeader>
      <BrandList />
    </section>
  );
}

export default Brands;