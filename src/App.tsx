import Navbar from "./Components/Navbar"
import MainWindow from "./Components/MainWindow/mainWindow"
import React, { useState, useEffect, useRef } from "react"
import BIRDS from "vanta/dist/vanta.fog.min"

const Home = (props: any) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          highlightColor: 0x6b1eb1,
          midtoneColor: 0x553632,
          lowlightColor: 0xe63e2b,
          baseColor: 0xffffff,
          blurFactor: 0.4,
          zoom: 1.2,
          speed: 1.0,
          // Other configuration options specific to the effect
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div ref={myRef} className=" bg-[#6261a1] body-font min-h-screen">
      <MainWindow />
    </div>
  )
}

export default Home
