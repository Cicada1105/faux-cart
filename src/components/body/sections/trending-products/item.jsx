function ProductItem({ title, description, image }) {
  return (
    <li className='rounded-xl bg-[#f5f6f6] flex-1 flex flex-col'>
      <div className='rounded-t-xl aspect-[5/2] overflow-hidden'>
        <img className='w-full h-full object-cover hover:scale-110 transition' src={ image } alt={ title + ' image'} />
      </div>
      <div className='aspect-[5/2] p-8 flex flex-col gap-y-2 justify-between items-start'>
        <h3 className='text-xl font-bold'>{ title }</h3>
        <p className='font-medium'>{ description }</p>
        <button className='btn-inverse-dark'>Shop Now</button>
      </div>
    </li>
  );
}

export default ProductItem;