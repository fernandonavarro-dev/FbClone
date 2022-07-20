import Image from 'next/image'
import React from 'react'

export default function Contact({src, name}) {
  return (
    <div id="contact-full" className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2">
        <Image
            id="contact-image"
            alt={name}
            className="rounded-full"
            objectFit="cover"
            src={src}
            width={50}
            height={50}
            layout="fixed"
        />
        <p id="contact-name" className="font-semibold">{name}</p>
        <div id="contact-status-dot" className="absolute bottom-2 bg-green-400 h-3 w-3 rounded-full" />
    </div>
  )
}
