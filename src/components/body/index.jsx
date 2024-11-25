import { useContext } from 'react';

import { PageSettingsContext } from '../../context';

function Body() {
  const PageSettings = useContext(PageSettingsContext);

  return (
    <main className='grow'>
      <p>Language: { PageSettings.language }</p>
      <p>Location: { PageSettings.location }</p>
    </main>
  );
}

export default Body;