import DarkLogo from '/dark-logo.svg';

import { useInView } from 'react-intersection-observer'

import AcceptedPayments from './accepted-payments';
import Department from './department';
import AboutUs from './about-us';
import Services from './services';
import Help from './help';

function FooterTop() {
  const BASE_STYLE = 'transition duration-700 sm:col-span-2 md:col-span-4 lg:col-span-1';
  const SLIDE_UP_STYLE = ' translate-y-0';
  const SLIDE_DOWN_STYLE = ' translate-y-1/4';

  const { ref, inView } = useInView({
    triggerOnce: true
  });


  return (
    <div ref={ ref } className='grid gap-4 pt-[60px] pb-7 border-t-[1px] border-gray-300 lg:grid-cols-[2.5fr_1fr_1fr_1fr_1fr]'>
      <div className={ BASE_STYLE.concat(inView ? SLIDE_UP_STYLE : SLIDE_DOWN_STYLE)}>
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