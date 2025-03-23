import { useContext } from 'react';

import { PageSettingsContext, PageSettingsDispatchContext } from '../../../../context';

function LocationSelect() {
  const settings = useContext(PageSettingsContext);
  const dispatch = useContext(PageSettingsDispatchContext);

  const LOCATIONS = [
    {
      name: 'Can',
      value: 'canada'
    },
    {
      name: 'US',
      value: 'usa'
    },
    {
      name: 'Mex',
      value: 'mexico'
    }
  ]
  return (
    <div className='select-wrapper inline'>
      <select id='location-select' className='bg-transparent w-12' value={ settings.location } onChange={(e) => dispatch({
          type: 'change_location',
          payload: {
            location: e.target.value
          }
        })
      }>
      {
        LOCATIONS.map((location,i) =>
          <option key={ i } value={ location['value'] }>
            { location['name'] }
          </option>
        )
      }
      </select>
      <label htmlFor='location-select'>
        <i className="fa-solid fa-chevron-down"></i>
      </label>
    </div>
  )
}

export default LocationSelect;