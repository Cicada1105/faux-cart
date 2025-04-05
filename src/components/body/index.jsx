import { useContext } from 'react';

import { PageSettingsContext } from '../../context';

import IntroContent from './sections/intro-content';
import Categories from './sections/categories';
import TodaysBestDeals from './sections/best-deals';
import Brands from './sections/brands';
import Discounts from './sections/discounts';
import WeeklyProducts from './sections/weekly-products';
import CashBack200 from './sections/cash-back-200';
import ProductsFilter from './sections/products-filter';
import CashBack from './sections/cash-back';
import MostSellingProducts from './sections/most-selling';
import TrendingProducts from './sections/trending-products';
import BestSellingStores from './sections/best-selling-stores';
import Services from './sections/services';

function Body() {
  const PageSettings = useContext(PageSettingsContext);

  return (
    <main className='grow'>
      <p>Language: { PageSettings.language }</p>
      <p>Location: { PageSettings.location }</p>
      <IntroContent />
      <Categories />
      <TodaysBestDeals />
      <Brands />
      <Discounts />
      <WeeklyProducts />
      <CashBack200 />
      <ProductsFilter />
      <CashBack />
      <MostSellingProducts />
      <TrendingProducts />
      <BestSellingStores />
      <Services />
    </main>
  );
}

export default Body;