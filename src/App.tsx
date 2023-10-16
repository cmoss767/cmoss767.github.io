import MainWindow from "./Components/MainWindow/mainWindow"
import { WindowProvider } from "./Context/WindowContext"

const Home = () => {
  return (
    <div className=" bg-[#6261a1]/80 body-font min-h-screen">
      <WindowProvider>
        <MainWindow />
      </WindowProvider>
    </div>
  )
}

export default Home
