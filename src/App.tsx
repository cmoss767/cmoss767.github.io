import Navbar from "./Components/Navbar"
import MainWindow from "./Components/MainWindow/mainWindow"

import DesktopFiles from "./Components/DesktopFiles"
//
const Home = () => {
  return (
    <main className=" bg-[#6261a1] body-font min-h-screen">
      <Navbar />
      <MainWindow />
      <DesktopFiles />
    </main>
  )
}

export default Home
