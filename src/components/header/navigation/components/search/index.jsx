
function Search() {
  return (
    <search className='relative flex-grow'>
      <form action='/search'>
        <label htmlFor='search-product-field' className='sr-only'>Search Products</label>
        <input id='search-product-field' className='w-full px-4 py-2 outline-none border-green focus:border-blue border-2 rounded-full' type='search' name='q' placeholder='Search Product' />
        <button type='submit' className='absolute right-6 top-2'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </search>
  );
}

export default Search;