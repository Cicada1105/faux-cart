import CreditCard from './credit-card.jsx';

function CreditCardStacks() {
  const cardClassList = 'absolute h-min w-4/5 object-contain top-1/2 left-1/2';

  const greenCardClassList = '';
  const redCardClassList = '';
  const yellowCardClassList = '';

  const cardStyle = {
    translate: '-40% -15%',
    transformOrigin: 'left center'
  }

  const yellowCardStyle = {
    ...cardStyle,
    transform: 'rotate(-15deg)'
  }
  const redCardStyle = {
    ...cardStyle,
    transform: 'rotate(-21.6deg)',
  }
  const greenCardStyle = {
    ...cardStyle,
    transform: 'rotate(-30.6deg)',
  }
  return (
    <div className='relative w-4/5 h-full'>
      <div style={ yellowCardStyle } className={yellowCardClassList.concat(' ', cardClassList)}>
        <CreditCard color='#bc8720' />
      </div>
      <div style={ redCardStyle } className={redCardClassList.concat(' ', cardClassList)}>
        <CreditCard color='#940000' />
      </div>
      <div style={ greenCardStyle } className={greenCardClassList.concat(' ', cardClassList)}>
        <CreditCard color='#243f2e' />
      </div>
    </div>
  );
}

export default CreditCardStacks;