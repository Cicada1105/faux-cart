import './style.css';

function StoreItem({ name, delivery, image, store }) {
  return (
    <li className={ 'store-list-item flex flex-col text-left' }>
      <div className='relative rounded-xl overflow-hidden'>
        <img className={ 'store-item-image w-full h-full object-cover object-center' } src={ image } alt={ name.concat( ' image') } />
      </div>
      <hgroup className='px-5 z-10'>
        <img className='rounded-full w-[4rem] -mt-[2rem] mb-2' src={ store['image'] } alt={ store['image'].concat( ' logo') } />
        <h3 className='font-bold mb-2'>{ store['name'] }</h3>
        <h4 className='text-xs text-[#848181] font-semibold mb-2'>{ name }</h4>
        <p className={ 'delivery text-xs text-[#c34483]' }>{ delivery }</p>
      </hgroup>
    </li>
  );
}

export default StoreItem;