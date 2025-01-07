import { useContext } from 'react';

import { PageSettingsContext } from '../../context';

import Categories from './sections/categories';
import TodaysBestDeals from './sections/best-deals';
import Brands from './sections/brands';
import Discounts from './sections/discounts';
import WeeklyProducts from './sections/weekly-products';
import MostSellingProducts from './sections/most-selling';

function Body() {
  const PageSettings = useContext(PageSettingsContext);

  return (
    <main className='grow px-6'>
      <p>Language: { PageSettings.language }</p>
      <p>Location: { PageSettings.location }</p>
      <Categories />
      <TodaysBestDeals />
      <Brands />
      <Discounts />
      <WeeklyProducts />
      <MostSellingProducts />
    </main>
  );
}

export default Body;