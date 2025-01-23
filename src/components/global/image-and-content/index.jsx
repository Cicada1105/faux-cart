

function ImageAndContent({
  backgroundColor = '',
  padding = true,
  fullWidth = false,
  image: {
    src,
    isBackdrop = false,
    isFluidImage = false
  },
  content: {
    direction = 'left',
    isFluidContent = false,
    title,
    description = null,
    buttonText
  }
}) {

  /*
    Test if background color level (50, 100, 200, 300, etc.) is a "light" color
      ie. <= 500 - light (text color = black)
      ie. >  500 - dark  (text color = white)
  */
  const colorMatch = backgroundColor.match(/\d\d\d?/g);
  const colorBrightness = parseInt(colorMatch[0] || 50);
  const isDark = colorBrightness > 500;

  let ImageComponent;
  switch( typeof src ) {
    case 'string':
      ImageComponent = <img src={src} alt={ title + ' image' } />;
    break;
    case 'function':
      ImageComponent = src();
    break;
  }

  // Classes that apply to the Image and Content section as a whole
  let classList = `container-fluid ${backgroundColor}`;
  classList = classList.concat( fullWidth ? '' : ' px-16' );
  classList = classList.concat( padding ? ' py-6' : '' );
  classList = classList.concat( isDark ? ' text-white' : ' text-black' );

  // Classes that apply only to the Content container
  let contentContClassList = `${backgroundColor} flex-1 flex gap-y-6 items-start text-left flex-col justify-between`;
  // Classes that only apply to the Image container
  let imageContClassList = 'flex-1 justify-items-center';

  if ( isFluidContent ) {
    // If the image and content is full width, 
    //  no need to add additional negative margin
    if ( !fullWidth ) {
      if ( direction === 'right' )
        contentContClassList = contentContClassList.concat(' mr-[-40px]');
      else if ( direction === 'left' )
        contentContClassList = contentContClassList.concat(' ml-[-40px]')
    }
  }
  if ( isFluidImage ) {
    // If the image and content is full width, 
    //  no need to add additional negative margin
    if ( !fullWidth ) {
      if ( direction === 'right' )
        imageContClassList = imageContClassList.concat(' ml-[-40px]');
      else if ( direction === 'left' )
        imageContClassList = imageContClassList.concat(' mr-[-40px]');
    }
  }
  if ( direction === 'right' )
    imageContClassList = imageContClassList.concat(' ', 'order-first');

  // Classes that only apply to the Content button
  let buttonClassList = 'font-extrabold text-lg !py-4 !px-9';

  buttonClassList = buttonClassList.concat(' ',isDark ? 'btn-outline-light' : 'btn-dark');
  return (
    <section className={ classList }>
      <div className='flex py-16 px-16'>
        <hgroup className={ contentContClassList }>
          <h2 className='text-5xl font-bold'>{ title }</h2>
          <p className='text-xl font-medium'>{ description }</p>
          <button className={ buttonClassList }>{ buttonText }</button>
        </hgroup>
        <div className={ imageContClassList }>
          { !isBackdrop && ImageComponent }
        </div>
      </div>
    </section>
  );
}

export default ImageAndContent;