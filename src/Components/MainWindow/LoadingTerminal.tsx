import { useState } from "react"
import Dots from "../Dots/Dots"
import Terminal from "./Terminal"
import { useWindowContext } from "../../Context/WindowContext"

const LoadingTerminal = () => {
  const [terminal, setTerminal] = useState<string[]>([])
  const { showDots, showText } = useWindowContext()
  
  return (
    <div className="bg-[#f9efe4] h-[400px] w-full border-3 border-black rounded-lg p-4 overflow-auto">
      <div className="space-y-4">
        {showText.text1 && (
          <div className="flex items-center">
            <span className="text-base sm:text-lg">Installing CoolFactor.exe</span>
            {showDots?.dots1 && <Dots />}
          </div>
        )}
        
        {showText.text2 && (
          <div className="flex items-center">
            <span className="text-base sm:text-lg">Building Life Experience</span>
            {showDots?.dots2 && <Dots />}
          </div>
        )}
        
        {showText.text3 && (
          <div className="flex items-center">
            <span className="text-base sm:text-lg">Rendering Professional Mode</span>
            {showDots?.dots3 && <Dots />}
          </div>
        )}
        
        {showText.greetingText && (
          <div className="text-center py-8">
            <h2 className="text-xl sm:text-3xl mb-2">Hi there, I'm Chris. 👋</h2>
            <span className="text-lg sm:text-xl">Welcome to my Site</span>
          </div>
        )}
        
        {showText.terminal && (
          <div className="space-y-4">
            <div>
              <span className="text-lg sm:text-xl block">Need Help?</span>
              <span className="text-base sm:text-lg block">
                Type help in the command line to see available options
              </span>
            </div>
            
            {terminal.map((line, index) => (
              <div key={index} className="text-base sm:text-lg">
                {line}
              </div>
            ))}
            
            <div className="mt-4">
              <Terminal terminal={terminal} setTerminal={setTerminal} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoadingTerminal
