import Rating from '@components/rating';

function ProductItem({ title, price, description, rating, reviews, thumbnail }) {
  return (
    <li className='md:w-[33.333vw] inline-block rounded-xl text-left'>
      <div className='bg-[#f5f6f6] rounded-xl relative aspect-square'>
        <img className='hover:scale-100 hover:cursor-pointer scale-90 rounded-xl transition object-cover object-center w-full' src={ thumbnail } />
        <i className="hover:bg-[pink] hover:cursor-pointer bg-white p-2 transition rounded-full absolute right-4 top-4 fa-regular fa-heart"></i>
      </div>
      <div className='mt-2 flex flex-col gap-y-2 items-start'>
        <hgroup className='flex justify-between w-full font-bold'>
          <h3>{ title }</h3>
          <p>
            <sup>$</sup>{ price }<sup>.00</sup>
          </p>
        </hgroup>
        <p className='font-medium text-sm'>{ description }</p>
        <div className='flex gap-x-2'>
          <Rating rating={rating} />
          <p className='text-sm'>({ reviews.length })</p>
        </div>
        <button className='hover:bg-green hover:text-white px-5 py-2 border-solid border-green border-[1px] font-medium rounded-3xl transition duration-500'>Add to Cart</button>
      </div>
    </li>
  );
}

export default ProductItem;