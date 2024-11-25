function Links({ links }) {
  return(
      <ul className='flex gap-x-2'>
        {
          links.map((link, i) => 
            <li key={ i }>
              <a href={ link['path'] }>{ link['text'] }</a>
            </li>
          )
        }
      </ul>
  );
}

export default Links;