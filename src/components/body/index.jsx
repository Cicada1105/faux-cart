import { useContext } from 'react';

import { PageSettingsContext } from '../../context';

import Brands from './sections/brands';

function Body() {
  const PageSettings = useContext(PageSettingsContext);

  return (
    <main className='grow px-6'>
      <p>Language: { PageSettings.language }</p>
      <p>Location: { PageSettings.location }</p>
      <Brands />
    </main>
  );
}

export default Body;