import InputBox from "./InputBox"
import Stories from "./Stories"

export default function Feed() {
  return (
    <div id="feed-full" className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
        <div id="feed-stories" className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
            <Stories />
            <InputBox />
        </div>
    </div>
  )
}
