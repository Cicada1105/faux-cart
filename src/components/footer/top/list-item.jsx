function ListItem({ children }) {
  return (
    <li className="font-normal text-black transition hover:translate-x-[10px] hover:text-[#ff5c4c]">{ children }</li>
  )
}

export default ListItem;