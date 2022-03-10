
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  
} from "@heroicons/react/outline";
import { HomeIcon} from "@heroicons/react/solid"

function Header() {
  return (
    <div>
        <div className='flex justify-between max-w-6xl bg-white mx-5 lg:mx-auto'>
        
          <div className='relative hidden lg:inline-grid w-24 h-19.5 cursor-pointer'>
            <Image src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit='contain' />       
          </div>
          <div className='relative  lg:hidden  w-10  flex-shrink-0 cursor-pointer'>
            <Image src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit='contain' />
            
          </div>
          <div className='max-w-xs'>
          <div className='relative mt-1 pl-3 rounded-md '>
              <div className='absolute inset-y-0  pl-3 flex item-center pointer-events-none'>
                <SearchIcon className='h-5 w-5 text-grey-500'/>
              </div>
              <input className='bg-gray-100 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black rounded-md' type="text" placeholder="search"/>
          </div>
          </div>
          <div className='flex item-center justify-end space-x-4'>
          <HomeIcon className='navBtns'/>
          <MenuIcon className=' h-10 md:hidden cursor-pointer'/>
          <PaperAirplaneIcon className='navBtns'/>
          <PlusCircleIcon className='navBtns'/>
          <UserGroupIcon className='navBtns'/>
          <HeartIcon className='navBtns'/>
          <img className='h-10 rounded-full cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZl1gpsXj18vbKomyh7dbjTH7OglE3IPh3v5OdkMomuvxRj_C8lKymIQtgdhmRI84gsM&usqp=CAU" alt='profile pic'/>
          </div>
         
        </div>           
    </div>
  )
}

export default Header