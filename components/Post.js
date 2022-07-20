/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline"

export default function Post({name, message, email, postImage, image, timestamp}) {
  return (
    <div id="posts-full" className="flex flex-col">
        <div id="post-full" className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
            <div id="post-top" className="flex items-center space-x-2">
                <img
                    id="post-top-image"
                    className="rounded-full"
                    // src={image}
                    src="https://links.papareact.com/l4v"
                    width={40}
                    height={40}
                    alt=""
                    />
                <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-xs text-gray-400">
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </p>
                </div>
            </div>
            <p id="post-message" className="font-medium pt-4">{message}</p>
        </div>
        {postImage && (
            <div id="post-image" className="relative h-56 md:h-96 bg-white">
                <Image src={postImage} objectFit="cover" layout="fill"/>
            </div>
        )}
        <div id="post-bottom" className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
            <div className="inputIcon rounded-none">
                <ThumbUpIcon className="h-4" />
                <p className="text-xs sm:text-base">Like</p>
            </div>
            <div className="inputIcon rounded-none">
                <ChatAltIcon className="h-4" />
                <p className="text-xs sm:text-base">Comment</p>
            </div>
            <div className="inputIcon rounded-none">
                <ShareIcon className="h-4" />
                <p className="text-xs sm:text-base">Share</p>
            </div>
        </div>
    </div>
  )
}
