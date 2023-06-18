import MovingText from "./MovingText"
const Navbar = () => {
  return (
    <header className="bg-[#ffc9c9] md:sticky top-0 z-10 h-16 pt-2.5 border-b-2 border-black flex p-4 text-2xl ">
      <div className=" w-40 mr-5 mt-0.5">Chris Moss</div>
      <div className="h-10 bg-black ">
        <MovingText />
      </div>
    </header>
  )
}

export default Navbar
