function Item({ name, details, image }) {
  return (
    <li className='text-left bg-[#f5f6f6] flex flex-col rounded-xl'>
      <hgroup className='flex flex-col flex-1 justify-around gap-6 p-10'>
        <h3 className='text-2xl font-bold'>{name}</h3>
        <p className='font-medium'>{ details }</p>
      </hgroup>
      <div className='h-60 sm:h-auto bg-black rounded-b-xl'>
        <img className='rounded-b-xl h-full w-full object-cover object-center' src={ image } alt={ name + ' image' } />
      </div>
    </li>
  )
}

export default Item;