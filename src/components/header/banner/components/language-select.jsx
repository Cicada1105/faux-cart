import { useContext } from 'react';

import { PageSettingsContext, PageSettingsDispatchContext } from '../../../../context';

function LanguageSelect() {
  const settings = useContext(PageSettingsContext);
  const dispatch = useContext(PageSettingsDispatchContext);

  const LANGUAGES = [
    {
      display_name: 'Eng',
      value: 'english'
    },
    {
      display_name: 'Fren',
      value: 'french'
    },
    {
      display_name: 'Span',
      value: 'spanish'
    }
  ]
  return (
    <div className='select-wrapper inline'>
      <select id='language-select' className="bg-transparent w-12" value={ settings.language } onChange={(e) => dispatch({
          type:'change_language',
          payload:{
            language: e.target.value
          }
        }
      )}>
      {
        LANGUAGES.map((language,i) =>
          <option key={ i } value={ language['value'] }>
            { language['display_name'] }
          </option>
        )
      }
      </select>
      <label htmlFor='language-select'>
        <i className="fa-solid fa-chevron-down"></i>
      </label>
    </div>
  )
}

export default LanguageSelect;