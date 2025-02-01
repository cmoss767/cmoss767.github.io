import TabWrapper from "../../TabWrapper"
import AudioVisualizer from "./AudioVisualizer"

const AudioPlayer = () => {
  return (
    <>
      <div>
        <TabWrapper>
          <h2 className="text-center font-semibold text-lg mb-4">Radio</h2>
          <div className="w-full px-4">
            <div className="bg-black border-3 border-black rounded-lg overflow-hidden">
              <div className="h-[250px]">
                <AudioVisualizer />
              </div>
            </div>
          </div>
        </TabWrapper>
      </div>
    </>
  )
}

export default AudioPlayer
