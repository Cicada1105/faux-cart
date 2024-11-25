
function CategoryList({ categories }) {
  return (
    <ul className='grid gap-8 grid-cols-[max-content_max-content]'>
      {
        categories.map((category,i) => {
          let name = category['name'];

          return (
            <li key={ i }>
              <a href='#' className='p-1 flex items-center'>
                <img className='w-16' src={ category['thumbnail'] } alt={ category['name'] + ' image'} />
                <div>
                  <p>{ name[0].toUpperCase().concat(name.slice(1)) }</p>
                  <p>{ category['total'] } Items Available</p>
                </div>
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default CategoryList;