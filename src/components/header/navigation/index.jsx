import DarkLogo from '/dark-logo.svg';

import Categories from './components/categories';
import Links from './components/links';
import Search from './components/search';

function Navigation() {
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
    <div className='flex gap-x-4 items-center shadow-md px-8 py-6 font-bold text-green'>
      <img src={ DarkLogo } alt='Shopcart Logo' className='w-32'/>
      <Categories />
      <nav>
        <Links links={ LINKS } />
      </nav>
      <Search />
      <Links links={ ACCOUNT_LINKS } />
    </div>
  )
}

export default Navigation;