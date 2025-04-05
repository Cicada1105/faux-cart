import { useState, useEffect } from 'react';

function FooterBottom() {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    import('./data.json').then(result =>
      result.default
    ).then(data =>
      setLinks(data)
    ).catch(err => {
      console.log(err);
      setError(true);
    }).finally(() =>
      setLoading(false)
    );
  },[]);

  return (
    <div className='py-8 border-t-[1px] border-gray-300'>
    {
      loading ?
        <p>Loading...</p>
      :
        ( !error && links.length ) ?
          <ul className='flex flex-col flex-wrap sm:flex-row sm:flex-wrap gap-y-4 justify-between items-center font-medium text-black'>
          {
            links.map((link,i) =>
              <a key={ i } href={ link['path'] }>
                <li className='flex items-center gap-x-2'>
                  <i className={link['icon'].concat(' text-[#c34483] text-xl')} />
                  <p className='inline-block text-sm transition hover:text-[#ff5c4c]'>{ link['text'] }</p>
                </li>
              </a>
            )
          }
            <li className='text-sm max-[856px]:flex-grow'>
            All Right reserved by Musemind <a href='https://musemind.agency/' className='underline'>ui/ux design</a> agency | 2022
            </li>
          </ul>
        :
          <p>Error loading links.</p>
    }
    </div>
  );
}

export default FooterBottom;