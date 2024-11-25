import { useContext } from 'react';

import { PageSettingsDispatchContext } from '../../../../context';

function LanguageSelect() {
  const dispatch = useContext(PageSettingsDispatchContext);

  return (
    <div className='select-wrapper inline'>
      <select id='language-select' className="bg-transparent w-12" onChange={(e) => dispatch({
          type:'change_language',
          payload:{
            language: e.target.value
          }
        }
      )}>
        <option value='english' default>
          Eng
        </option>
        <option value='spanish'>
          Span
        </option>
        <option value='french'>
          Fren
        </option>
      </select>
      <label htmlFor='language-select'>
        <i className="fa-solid fa-chevron-down"></i>
      </label>
    </div>
  )
}

export default LanguageSelect;