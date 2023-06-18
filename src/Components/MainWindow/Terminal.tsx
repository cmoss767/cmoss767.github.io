import { useState, useEffect, useRef } from "react"
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
      console.log(currentDirectory)

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
      } else if (command === "clear") {
        setTerminal([])
      } else if (command === "ls") {
        if (currentDirectory === "root") {
          setTerminal((terminal) => [
            ...terminal,
            "About_Me  Skills  Projects  Blog  Email  Desktop",
          ])
        } else if (currentDirectory === "desktop") {
          setTerminal((terminal) => [...terminal, "Resume"])
        }
      } else if (command === "cd desktop") {
        setCurrentDirectory("desktop")
      } else if (
        command === "cd ~" ||
        command === "cd root" ||
        (currentDirectory === "desktop" && command === "cd ..")
      ) {
        setCurrentDirectory("root")
      } else if (command === "cat about_me") {
        setTerminal((terminal) => [
          ...terminal,
          "I'm Chris Moss, a software developer with a background in vaccine research.",
          "I've coded on and off since 2018 but I finally decided to take the plunge into programming as a career in 2022. ",
          "I currently work at Code and Trust and I love learning about new technologies and building out cool projects. In my free time I enjoy hiking, cycling, cooking, and playing tennis.",
        ])
      } else if (command === "cat skills") {
        setTerminal((terminal) => [
          ...terminal,
          "Technical Languages: Typescript, Python, Java, SQL, R, HTML, CSS, Git, Bash",
          "Development Skills: React.js, React Query, Node.js, Express.js, MongoDB, MySQL, Git Version Control, Jest, Prisma",
        ])
      } else {
        setTerminal((terminal) => [
          ...terminal,
          `command not found: ${e.target.value}`,
        ])
      }

      setValue("")
    }
  }
  const handleInputValueChange = (e: any) => {
    setValue(e.target.value)
  }
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollIntoView({
        block: "nearest",
        inline: "center",
      })
    }
  }, [terminal])

  return (
    <div ref={terminalRef} className="flex row">
      <span>Type Command:</span>
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
