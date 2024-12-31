import { useContext } from 'react';

import { PageSettingsContext } from '../../context';

import Brands from './sections/brands';
import Discounts from './sections/discounts';

function Body() {
  const PageSettings = useContext(PageSettingsContext);

  return (
    <main className='grow px-6'>
      <p>Language: { PageSettings.language }</p>
      <p>Location: { PageSettings.location }</p>
      <Brands />
      <Discounts />
    </main>
  );
}

export default Body;