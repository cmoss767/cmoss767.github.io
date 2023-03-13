import { AiOutlineFileText } from "react-icons/ai"

const DesktopFiles = () => {
  return (
    <div className="absolute top-20 right-5 ">
      <button className=" h-20 w-24">
        <AiOutlineFileText className="text-4xl mx-auto mt-2.5" />
        <div className="mt-2 text-s text-center">Resume</div>
      </button>
    </div>
  )
}
export default DesktopFiles
