function BrandItem({ brand_name, image_link, estimated_delivery }) {
  const SIZE = 70;
  return (
    <li className='rounded-2xl flex items-center gap-x-4 py-4 px-8 bg-gray-100 hover:outline hover:outline-1'>
      <img className='hover:scale-110 hover:cursor-pointer transition-all' src={ image_link } alt={ `${brand_name} image` } width={ SIZE + 'px' } height={ SIZE + 'px' } loading='lazy' />
      <div className='flex-1 text-left'>
        <p className='font-bold'>{ brand_name }</p>
        <p>{ estimated_delivery }</p>
      </div>
    </li>
  )
}

export default BrandItem;