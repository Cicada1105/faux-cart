function CategoryItem({ name, image }) {
  return (
    <li className='flex flex-col items-center aspect-[3/2] md:aspect-[7/9] overflow-hidden bg-[lightgrey] rounded-xl p-4'>
      <h3 className='font-bold text-lg'>{ name }</h3>
      <div className='flex-1'>
        <img className='object-cover h-full hover:scale-110 hover:cursor-pointer transition' src={ image } alt={ name + " image" } />
      </div>
    </li>
  )
}

export default CategoryItem;