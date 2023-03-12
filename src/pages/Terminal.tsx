import { useState } from "react"
import { Dispatch, SetStateAction } from "react"

interface TerminalProps {
  setTerminal: Dispatch<SetStateAction<string[]>>
  terminal: string[]
}

const Terminal = ({ setTerminal, terminal }: TerminalProps) => {
  const [value, setValue] = useState("")
  const [currentDirectory, setCurrentDirectory] = useState("root")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number>(0)

  const handleKeyDown = (e: any) => {
    //up arrow
    if (e.keyCode === 38) {
      setValue(commandHistory[historyIndex])
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1)
      }
    }
    //down arrow
    if (e.keyCode === 40) {
      if (historyIndex < commandHistory.length - 1) {
        setValue(commandHistory[historyIndex + 1])
        setHistoryIndex(historyIndex + 1)
      }
      if (historyIndex === commandHistory.length - 1) {
        setValue("")
      }
    }
    if (e.key === "Enter") {
      setCommandHistory((commandHistory) => [...commandHistory, e.target.value])
      setHistoryIndex(commandHistory.length)
      setValue("")
      const command = e.target.value.toLowerCase()
      if (command === "help") {
        setTerminal((terminal) => [
          ...terminal,
          "You can click on icons in the GUI or you can access them here in the CLI. ",
          "The list of available commands are:",
          "ls",
          "cd",
          "cat",
          "help ",
          "clear",
        ])
      }
      if (command === "clear") {
        setTerminal([])
      }
      if (command === "ls") {
        if (currentDirectory === "root") {
          setTerminal((terminal) => [
            ...terminal,
            "About_Me  Skills  Projects  Blog  Email  Desktop",
          ])
        }
      }
    }
  }
  const handleInputValueChange = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <div className="flex row">
      <span>Type Command Here:</span>
      <input
        className="bg-[#f9efe4] focus:outline-none ml-1"
        type="text"
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(event) => handleInputValueChange(event)}
      />
    </div>
  )
}

export default Terminal
