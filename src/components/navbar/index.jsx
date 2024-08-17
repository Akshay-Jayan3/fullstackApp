import Links from "./links"

const Navbar = () => {
  return (
    <div className="flex justify-between py-4">
      <div>Logo</div>
      <div className="w-1/4">
       <Links/>
      </div>
    </div>
  )
}

export default Navbar