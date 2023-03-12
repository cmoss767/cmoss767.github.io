import Navbar from "./Navbar"
import About from "./About"
import MainWindow from "./mainWindow"

import * as React from "react"
import { ColorModeContext } from "../router"
import DesktopFiles from "./DesktopFiles"

const Home = () => {
  const colorMode = React.useContext(ColorModeContext)

  return (
    <main className=" bg-[#6261a1] body-font min-h-screen">
      <Navbar />
      <MainWindow />
      <DesktopFiles />
    </main>
  )
}

export default Home
