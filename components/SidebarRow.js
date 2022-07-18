import Image from "next/image"

export default function SidebarRow({src, Icon, title}) {
  return (
    <div id="sidebar-row-div" className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
        {src && (
            <Image 
                alt=""
                className="rounded-full"
                src={src}
                width={30}
                height={30}
                layout="fixed"
            />
        )}
        {Icon && <Icon id="sidebar-row-icon" className="h-8 w-8 text-blue-500" /> }
        <p id="sidebar-row-title" className="hidden sm:inline-flex font-medium">
            {title}</p>
    </div>
  )
}
