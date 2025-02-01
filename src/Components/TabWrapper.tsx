import { ReactNode } from "react"
import { TABS } from "./MainWindow/mainWindow"
import { useWindowContext } from "../Context/WindowContext"

interface TabWrapperProps {
  children: ReactNode
}

const TabWrapper = ({ children }: TabWrapperProps) => {
  const { setTabs } = useWindowContext()
  return (
    <div className="bg-[#f9efe4] h-[480px] md:h-[400px] w-full border-3 border-black p-2 overflow-auto">
      <div className="flex flex-row justify-between">
        <button
          className="bg-[#ffc9c9] hover:bg-[#ffc9c9]/80 text-black py-2 px-4 rounded-md"
          onClick={() => {
            setTabs(TABS.HOME)
          }}
        >
          Back
        </button>
      </div>
      {children}
    </div>
  )
}

export default TabWrapper
