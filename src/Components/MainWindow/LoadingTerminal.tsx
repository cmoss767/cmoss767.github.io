import { useState } from "react"
import Dots from "../Dots/Dots"
import Terminal from "./Terminal"
import { useWindowContext } from "../../Context/WindowContext"

const LoadingTerminal = () => {
  const [terminal, setTerminal] = useState<string[]>([])
  const { showDots, showText } = useWindowContext()
  return (
    <div className="bg-[#f9efe4] h-[calc(100vh-180px)] md:h-[400px] w-full border-3 border-black p-2 ">
      {showText.text1 && (
        <div className="flex row">
          <span className="mr-1 text-lg md:text-xl">Installing CoolFactor.exe</span>
          {showDots?.dots1 && <Dots />}
        </div>
      )}
      {showText.text2 && (
        <div className="flex row">
          <span className="mr-1 text-lg md:text-xl">Building Life Experience</span>
          {showDots?.dots2 && <Dots />}
        </div>
      )}
      {showText.text3 && (
        <div className="flex row">
          <span className="mr-1 text-lg md:text-xl">Rendering Professional Mode</span>
          {showDots?.dots3 && <Dots />}
        </div>
      )}
      {showText.greetingText && (
        <div className="text-center p-4">
          <h2 className="text-3xl md:text-5xl">Hi there, I'm Chris. 👋 </h2>
          <span className="text-2xl md:text-3xl">Welcome to my Site</span>
        </div>
      )}
      {showText.terminal && (
        <>
          <div className="mt-2 space-y-2">
            <span className="text-2xl block">Need Help?</span>
            <span className="text-lg block">
              Type help in the command line to see available options
            </span>
          </div>
          {terminal.map((line: string) => (
            <div className="text-lg mt-2">{line}</div>
          ))}
          <div className="mt-4">
            <Terminal terminal={terminal} setTerminal={setTerminal} />
          </div>
        </>
      )}
    </div>
  )
}

export default LoadingTerminal
