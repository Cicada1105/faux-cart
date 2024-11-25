import { useReducer } from 'react';

import './App.css'

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

import Reducer from './reducer';
import {
  PageSettingsContext, PageSettingsDispatchContext
} from './context';

const defaultPageSettings = {
  language: 'english',
  location: 'canada'
}
function App() {
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
