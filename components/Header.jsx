import Image from 'next/image'
import {
  CheckBadgeIcon,
  FolderOpenIcon,
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
}from '@heroicons/react/24/outline';
import Header_Item from './Header_Item'


const Header = () => {
  return (
    <header className=" flex flex-col sm:flex-row m-5  justify-between items-center h-auto">
      <div className='flex flex-grow justify-evenly max-w-2xl '>
        <Header_Item title='HOME' Icon={HomeIcon}/>
        <Header_Item title='TRENDING' Icon={BoltIcon}/>
        <Header_Item title='VERIFIED' Icon={CheckBadgeIcon}/>
        <Header_Item title='COLLECTIONS' Icon={FolderOpenIcon}/>
        <Header_Item title='SEARCH' Icon={MagnifyingGlassIcon}/>
        <Header_Item title='ACCOUNT' Icon={UserGroupIcon}/>
      </div>
      <Image 
      src='https://links.papareact.com/ua6' 
      alt='/' 
      width={200} 
      height={100}>

      </Image>
    </header>
  )
}

export default Header