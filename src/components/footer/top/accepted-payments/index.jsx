import { useState, useEffect } from 'react';

function AcceptedPayments() {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const paymentStyle = {
    clipPath: "inset(6.5% 0.15% 6% 0.15% round 9%)"
  }

  useEffect(() => {
    import('./data.json').then(result =>
      result.default
    ).then(data =>
      setPaymentMethods(data)
    ).catch(err => {
      console.log(err);
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  },[]);

  return (
    <div>
      <h2 className='mb-6 text-center text-lg sm:text-left text-black font-semibold'>Accepted Payments</h2>
      {
        loading ?
          <p>Loading...</p>
        :
          ( !error && paymentMethods.length ) ?
            <ul className='grid grid-cols-[repeat(4,58px)] justify-center sm:justify-start gap-x-1 gap-y-2 text-4xl'>
            {
              paymentMethods.map((paymentMethod, i) => {
                let style = {
                  ...paymentStyle
                }

                paymentMethod['color'].includes('linear') ?
                    style = {
                      background: paymentMethod['color'],
                      color: 'white',
                      ...style
                    }
                :
                  style['color'] = paymentMethod['color'];

                return (
                  <li key={i} className='border-[0.5px] rounded-[5px] border-gray-300 min-w-10 min-h-12'>
                    <i style={ style } aria-label={paymentMethod['type']} className={paymentMethod['image_class'].concat(' align-middle')} />
                  </li>
                )
              })
            }
            </ul>
          :
            <p>Error loading items...</p>
      }
      <ul>
        
      </ul>
    </div>
  );
}

export default AcceptedPayments;