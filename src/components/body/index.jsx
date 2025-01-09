import { useContext } from 'react';

import { PageSettingsContext } from '../../context';

import Categories from './sections/categories';
import TodaysBestDeals from './sections/best-deals';
import Brands from './sections/brands';
import Discounts from './sections/discounts';
import WeeklyProducts from './sections/weekly-products';
import ProductsFilter from './sections/products-filter';
import MostSellingProducts from './sections/most-selling';
import TrendingProducts from './sections/trending-products';
import Services from './sections/services';

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
      <ProductsFilter />
      <MostSellingProducts />
      <TrendingProducts />
      <Services />
    </main>
  );
}

export default Body;