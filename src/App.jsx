import { useReducer } from 'react';

import './App.css'

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

import Reducer from './reducer';
import {
  PageSettingsContext, PageSettingsDispatchContext
} from './context';

function App() {
  const LANGUAGE = navigator.language;
  const [USER_LANGUAGE, USER_LOCATION] = LANGUAGE.split('-').map(language => language.toLowerCase());

  const SUPPORTED_LANGUAGES = {
    'en': 'english',
    'es': 'spanish',
    'fr': 'french'
  }
  const SUPPORTED_LOCATIONS = {
    'us': 'usa',
    'ca': 'canada',
    'mx': 'mexico'
  }

  const defaultPageSettings = {
    language: SUPPORTED_LANGUAGES[USER_LANGUAGE || 0],
    location: SUPPORTED_LOCATIONS[USER_LOCATION || 0]
  }  
  
  const [pageSettings, dispatch] = useReducer(Reducer,defaultPageSettings);

  return (
    <PageSettingsContext.Provider value={ pageSettings }>
      <PageSettingsDispatchContext.Provider value={ dispatch }>
        <Header />
        <Body />
        <Footer />
      </PageSettingsDispatchContext.Provider>
    </PageSettingsContext.Provider>
  )
}

export default App
