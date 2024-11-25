import { useContext } from 'react';

import { PageSettingsDispatchContext } from '../../../../context';

function LocationSelect() {
  const dispatch = useContext(PageSettingsDispatchContext);

  return (
    <div className='select-wrapper inline'>
      <select id='location-select' className='bg-transparent w-12' onChange={(e) => dispatch({
          type: 'change_location',
          payload: {
            location: e.target.value
          }
        })
      }>
        <option value='canada' default>
          Can
        </option>
        <option value='us'>
          US
        </option>
        <option value='mexico'>
          Mex
        </option>
      </select>
      <label htmlFor='location-select'>
        <i className="fa-solid fa-chevron-down"></i>
      </label>
    </div>
  )
}

export default LocationSelect;