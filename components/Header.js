import Image from "next/image"
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "../components/HeaderIcon"

function Header() {
  return (
    <div id="header-full" className="flex sticky top-0 bg-white items-center p-2 lg:px-5 shadow-md">
        <div id="header-left" className="flex items-center">
            <Image 
            alt="fb-logo" 
            src="https://links.papareact.com/5me"
            width={40}
            height={40}
            layout="fixed"
            />
            <div id="header-searchbar" className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600" />
                <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search Fb" />
            </div>
        </div>
        <div id="header-center" className="flex justify-center flex-grow" >
            <div id="header-center-icons" className="flex space-x-6 md:space-x-2" >
                <HeaderIcon active Icon={HomeIcon} />
                <HeaderIcon Icon={FlagIcon} />
                <HeaderIcon Icon={PlayIcon} />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />
            </div>     
        </div>
        <div id="header-right" className="flex items-center sm:space-x-2 justify-end" >
            <div id="header-user-icons" className="flex space-x-6 md:space-x-2" >
                <p className="whitespace-nowrap font-semibold pr-3 items-center">Fernando Navarro</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>     
        </div>
    </div>
  )
}

export default Header