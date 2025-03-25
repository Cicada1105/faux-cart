import Rating from '@components/rating';

import style from './index.module.css';

function ProductItem({ title, price, discountPercentage = null, description, rating, reviews, thumbnail }) {
  let [ priceDollors, priceDecimal ] = price.toString().split('.');

  return (
    <li className='rounded-xl text-left flex flex-col'>
      <div className='bg-[#f5f6f6] rounded-xl relative aspect-square'>
        <img className='hover:scale-100 hover:cursor-pointer scale-90 rounded-xl transition object-cover object-center w-full' src={ thumbnail } />
        <i className="hover:bg-[pink] hover:cursor-pointer bg-white p-2 transition rounded-full absolute right-4 top-4 fa-regular fa-heart"></i>
      </div>
      <div className='mt-2 flex-1 flex flex-col gap-y-2 items-start'>
        <hgroup className='relative flex justify-between w-full font-bold'>
          <h3 className='peer hover:cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap'>{ title }</h3>
          <p>
            <sup>$</sup>{ priceDollors }<sup>.{ priceDecimal }</sup>
          </p>
          <p aria-hidden className={ style.tooltip.concat(' peer-hover:opacity-100') }>{ title }</p>
        </hgroup>
        {
          discountPercentage &&
          <p className='font-bold text-[red] text-sm uppercase'>{ discountPercentage }% off!</p>
        }
        <p className='flex-1 font-medium text-sm'>{ description }</p>
        <div className='flex gap-x-2'>
          <Rating rating={rating} />
          <p className='text-sm'>({ reviews.length })</p>
        </div>
        <button className='btn-outline-dark max-sm:w-full'>Add to Cart</button>
      </div>
    </li>
  );
}

export default ProductItem;