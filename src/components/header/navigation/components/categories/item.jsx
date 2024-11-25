function CategoryItem({ category }) {
  let { name, thumbnail, total } = category;
  let capitalName = name[0].toUpperCase().concat(name.slice(1));

  return (
    <li>
      <a href='#' className='p-1 flex items-center'>
        <img className='w-16' src={ thumbnail } alt={ `${name} image`} />
        <div>
          <p>{ capitalName }</p>
          <p>{ total } Items Available</p>
        </div>
      </a>
    </li>
  )
}

export default CategoryItem;