import { useState } from 'react';

import DarkLogo from '/dark-logo.svg';

import Categories from './components/categories';
import Links from './components/links';
import Search from './components/search';

function Navigation() {
  const [open, setOpen] = useState(false);

  const LINKS = [
    {
      path: './',
      text: 'Deals',
    },
    {
      path: './',
      text: 'What\'s New'
    },
    {
      path: './',
      text: 'Delivery'
    }
  ]
  const ACCOUNT_LINKS = [
    {
      path: './',
      text: 'Account'
    },
    {
      path: './',
      text: 'Cart'
    }
  ]

  return (
    <div className='relative flex gap-x-4 justify-between items-center shadow-md px-8 py-6 font-bold text-green'>
      <img src={ DarkLogo } alt='Shopcart Logo' className='w-32'/>
      <div className={( open ? 'hidden' : 'flex' ).concat(' max-lg:flex-col max-lg:items-center max-lg:absolute max-lg:p-5 max-lg:mt-2 max-lg:w-full lg:flex gap-y-4 gap-x-4 top-full left-0 rounded-xl bg-white')}>
        <Categories />
        <nav className='flex-grow'>
          <ul className='flex max-lg:flex-col justify-around gap-y-4 gap-x-4'>
            {
              LINKS.map((link, i) => 
                <li key={ i }>
                  <a href={ link['path'] }>{ link['text'] }</a>
                </li>
              )
            }
          </ul>
        </nav>
      </div>
      <Search />
      <Links links={ ACCOUNT_LINKS } />
      <i onClick={() => setOpen(!open)} className="lg:hidden w-32 text-right fa-solid fa-bars"></i>
    </div>
  )
}

export default Navigation;