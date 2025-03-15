import { ReactNode } from "react"
import { TABS } from "./MainWindow/mainWindow"
import { useWindowContext } from "../Context/WindowContext"

interface TabWrapperProps {
  children: ReactNode
}

const TabWrapper = ({ children }: TabWrapperProps) => {
  const { setTabs } = useWindowContext()
  return (
    <div className="bg-[#f9efe4] h-[400px] w-full border-3 border-black rounded-lg overflow-auto">
      <div className="sticky top-0 bg-[#f9efe4] p-2 border-b-3 border-black z-10">
        <button
          className="bg-[#ffc9c9] hover:bg-[#ffc9c9]/80 text-black px-4 py-2 rounded-md transition-colors"
          onClick={() => setTabs(TABS.HOME)}
        >
          Back
        </button>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}

export default TabWrapper
