import Navbar from "./Navbar"

import * as React from "react"
import { ColorModeContext } from "../router"

const Home = () => {
  const colorMode = React.useContext(ColorModeContext)

  return <Navbar />
}

export default Home
