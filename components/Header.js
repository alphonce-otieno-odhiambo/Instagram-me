
import Image from 'next/image'

function Header() {
  return (
    <div>
      <div className='flex hiddenjustify-between max-w-6xl'>
      <h1>Gang gang</h1>
    <div className='relative h-24 w-24 '>
      <Image src="https://links.papareact.com/ocw"
       layout="fill"
       objectFit='contain' />
       
    </div>
      </div>
      
      
    </div>
  )
}

export default Header