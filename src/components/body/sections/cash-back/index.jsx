import ImageAndContent from '@components/image-and-content';

import CreditCardStack from './credit-card-stack';

function CashBack() {
  const data = {
    backgroundColor: 'bg-beige-400',
    fullWidth: false,
    image: {
      src: CreditCardStack
    },
    content: {
      title: 'Get 5% Cash Back',
      description: 'on Shopcart.com',
      buttonText: 'Learn More'
    }
  }

  return (
    <ImageAndContent {...data} />
  );
}

export default CashBack;