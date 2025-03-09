import DarkLogo from '/dark-logo.svg';

import AcceptedPayments from './accepted-payments';
import Department from './department';
import AboutUs from './about-us';
import Services from './services';
import Help from './help';

function FooterTop() {
  return (
    <div className='grid gap-4 pt-[60px] pb-7 border-t-[1px] border-gray-300 lg:grid-cols-[2.5fr_1fr_1fr_1fr_1fr]'>
      <div className='sm:col-span-2 md:col-span-4 lg:col-span-1'>
        <img src={ DarkLogo } alt='Shopcart Logo' className='mb-9'/>
        <p className='mb-10 text-left text-sm'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        <AcceptedPayments />
      </div>
      <Department />
      <AboutUs />
      <Services />
      <Help />
    </div>
  )
}

export default FooterTop;