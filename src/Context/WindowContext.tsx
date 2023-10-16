import { TABS } from "../Components/MainWindow/mainWindow"
import { ShowTextType } from "@/Components/MainWindow/mainWindow"
import { ShowDotsType } from "@/Components/MainWindow/mainWindow"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react"

interface IWindowContext {
  showDots: ShowDotsType
  setShowDots: Dispatch<SetStateAction<ShowDotsType>>
  showText: ShowTextType
  setShowText: Dispatch<SetStateAction<ShowTextType>>
  tabs: TABS
  setTabs: Dispatch<SetStateAction<TABS>>
}

const WindowContext = createContext<IWindowContext>({} as IWindowContext)

export const WindowProvider = ({ children }: { children: ReactNode }) => {
  const [showDots, setShowDots] = useState<{
    dots1: boolean
    dots2: boolean
    dots3: boolean
  }>({ dots1: true, dots2: false, dots3: false })
  const [showText, setShowText] = useState<{
    text1: boolean
    text2: boolean
    text3: boolean
    greetingText: boolean
    terminal: boolean
  }>({
    text1: true,
    text2: false,
    text3: false,
    greetingText: false,
    terminal: false,
  })
  const [tabs, setTabs] = useState(TABS.HOME)
  return (
    <WindowContext.Provider
      value={{
        tabs,
        setTabs,
        showDots,
        setShowDots,
        showText,
        setShowText,
      }}
    >
      {children}
    </WindowContext.Provider>
  )
}

export const useWindowContext = () => {
  const ctx = useContext(WindowContext)

  return ctx
}
