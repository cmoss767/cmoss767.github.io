import TabWrapper from "../../TabWrapper"
import AudioVisualizer from "./AudioVisualizer"

const AudioPlayer = () => {
  return (
    <>
      <div>
        <TabWrapper>
          <h2 className="text-center font-semibold text-lg ">Radio</h2>
          <div className=" w-full p-4 flex justify-center ">
            <AudioVisualizer />
          </div>

          <h2 className="text-center  text-md mt-8 "> *work in progress</h2>
        </TabWrapper>
      </div>
    </>
  )
}

export default AudioPlayer
