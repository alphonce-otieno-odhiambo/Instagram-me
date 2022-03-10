
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
        <div className='flex justify-between max-w-6xl bg-white'>
        <h1>Gang gang</h1>
          <div className='relative hidden lg:inline-grid h-24 w-24 cursor-pointer'>
            <Image src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit='contain' />       
          </div>
          <div className='relative  lg:hidden h-10 w-10  flex-shrink-0 cursor-pointer'>
            <Image src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit='contain' />
            
          </div>
          <div>
            <input type="text" placeholder="search"/>
          </div>
        </div>           
    </div>
  )
}

export default Header