function DiscountItem({ discount, description, image, color }) {
  let bgStyle = {
    backgroundColor: `hsl(${color.bg})`
  }
  let textStyle = {
    color: `hsl(${color.text})`
  }
  return (
    <li style={bgStyle} className='lg:flex-1 rounded-xl text-left'>
      <div className='p-7'>
        <h3 className='mb-5'>
          Save
          <span style={textStyle} className='block text-5xl font-extrabold'>${ discount }</span>
        </h3>
        <p className='font-medium text-base'>{ description }</p>
      </div>
      <div className='h-[200px] overflow-hidden'>
        <img className='h-full w-full object-cover object-center' src={ image.url } style={{ aspectRatio: image.aspectRatio}} height='auto'/>
      </div>
    </li>
  );
}

export default DiscountItem;