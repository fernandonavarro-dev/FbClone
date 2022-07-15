import Image from "next/image"
// import {
//     BellIcon,
//     ChatIcon,
//     ChevronDownIcon,
//     HomeIcon,
//     UserGroupIcon,
//     ViewGridIcon,
// } from "heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
        <h1></h1>
        <div className="flex items-center">
            <Image 
            alt="fb-logo" 
            src="https://links.papareact.com/5me"
            width={40}
            height={40}
            layout="fixed"
            />
        </div>
        <div className="flex">
            <SearchIcon className="h-6" />
            <input type="text" placeholder="Search Fb" />
        </div>
    </div>
  )
}

export default Header