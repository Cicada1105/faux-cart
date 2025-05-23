

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
      ImageComponent = <img className='w-full h-full object-cover' src={src} alt={ title + ' image' } />;
    break;
    case 'function':
      ImageComponent = src();
    break;
  }

  // Classes that apply to the Image and Content section as a whole
  let classList = `container-fluid relative`;
  classList = classList.concat( isBackdrop ? '' : ` ${backgroundColor}`);
  classList = classList.concat( fullWidth ? '' : ' px-8 md:px-12 lg:px-18' );
  classList = classList.concat( padding ? ' py-10 md:py-14 lg:py-20' : '' );
  classList = classList.concat( isDark ? ' text-white' : ' text-black' );

  // Classes that apply only to the Content container
  let contentContClassList = `${backgroundColor} lg:p-[70px] p-9 md:w-1/2 flex gap-y-6 items-center md:items-start md:text-left flex-col justify-center`;
  // Classes that only apply to the Image container
  let imageContClassList = 'md:w-1/2 justify-items-center content-center';

  // Only include image padding if it is not the backdrop
  if ( !isBackdrop ) {
    imageContClassList = imageContClassList.concat(' max-md:py-10');
  }
  if ( isFluidContent ) {
    // If the image and content is full width, 
    //  no need to add additional negative margin
    if ( !fullWidth ) {
      if ( direction === 'right' )
        contentContClassList = contentContClassList.concat(' -mr-32');
      else if ( direction === 'left' )
        contentContClassList = contentContClassList.concat(' -ml-32')
    }
    // If the image and content have padding
    //  add negative verticle margins
    if ( padding ) {
      contentContClassList = contentContClassList.concat(' -my-[102px]');
    }
  }
  if ( isFluidImage ) {
    // If the image and content is full width, 
    //  no need to add additional negative margin
    if ( !fullWidth ) {
      if ( direction === 'right' )
        imageContClassList = imageContClassList.concat(' -ml-32');
      else if ( direction === 'left' )
        imageContClassList = imageContClassList.concat(' -mr-32');
    }
    // If the image and content have padding
    //  add negative verticle margins
    if ( padding ) {
      imageContClassList = imageContClassList.concat(' -my-[102px]');
    }
  }
  if ( direction === 'right' )
    imageContClassList = imageContClassList.concat(' ', 'order-first');

  // Classes that only apply to the Content button
  let buttonClassList = 'font-extrabold text-lg !py-4 !px-9';

  buttonClassList = buttonClassList.concat(' ',isDark ? 'btn-outline-light' : 'btn-dark');
  return (
    <section className={ classList }>
    {
      isBackdrop && 
      <div className='absolute overflow-hidden left-0 top-0 w-full h-full z-[-1]'>
        {ImageComponent}
      </div>
    }
      <div className='flex flex-col md:flex-row'>
        <hgroup className={ contentContClassList }>
          <h2 className='text-5xl font-bold'>{ title }</h2>
          <p className='text-xl font-medium'>{ description }</p>
          <button className={ buttonClassList }>{ buttonText }</button>
        </hgroup>
        <div className={ imageContClassList }>
          { isBackdrop ? '' : ImageComponent }
        </div>
      </div>
    </section>
  );
}

export default ImageAndContent;
