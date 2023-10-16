import { useState } from "react"
import Dots from "../Dots/Dots"
import Terminal from "./Terminal"
import { useWindowContext } from "../../Context/WindowContext"

const LoadingTerminal = () => {
  const [terminal, setTerminal] = useState<string[]>([])
  const { showDots, showText } = useWindowContext()
  return (
    <div className="bg-[#f9efe4] h-88 w-full border-2 border-black p-2 overflow-auto">
      {showText.text1 && (
        <div className="flex row">
          <span className="mr-1">Installing CoolFactor.exe</span>
          {showDots?.dots1 && <Dots />}
        </div>
      )}
      {showText.text2 && (
        <div className="flex row">
          <span className="mr-1">Building Life Experience</span>
          {showDots?.dots2 && <Dots />}
        </div>
      )}
      {showText.text3 && (
        <div className="flex row">
          <span className="mr-1">Rendering Professional Mode</span>
          {showDots?.dots3 && <Dots />}
        </div>
      )}
      {showText.greetingText && (
        <div className="text-center">
          <h2 className="text-3xl">Hi there, I'm Chris. 👋 </h2>
          <span className="text-xl">Welcome to my Site</span>
        </div>
      )}
      {showText.terminal && (
        <>
          <div className="mt-2">
            <span className="text-lg">Need Help?</span>
            <br />
            <span className="text-sm">
              Type help in the command line to see available options
            </span>
          </div>
          {terminal.map((line: string) => (
            <div>{line}</div>
          ))}
          <Terminal terminal={terminal} setTerminal={setTerminal} />
        </>
      )}
    </div>
  )
}

export default LoadingTerminal
