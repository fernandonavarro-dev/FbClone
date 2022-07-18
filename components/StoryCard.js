import Image from 'next/image'

export default function StoryCard({name, src, profile}) {
  return (
    <div id="storycard-full" className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105">
        <Image
            alt={name}
            id="storycard-profile"
            className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
            src={profile}
            width={40}
            height={40}
            layout="fixed"
            objectFit="cover"
            />
        <Image 
            alt={name}
            id="storycard-src"
            className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
            src={src}
            layout="fill"
        />
    </div>
  )
}
