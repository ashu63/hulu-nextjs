import Image from 'next/image'
import HeaderItems from './HeaderItems'
import {HomeIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'

function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center m-5">
            <div className="flex flex-grow justify-evenly max-w-2xl  ">
                <HeaderItems title="HOME" Icon={HomeIcon}/>
                <HeaderItems title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon}/>
                <HeaderItems title="COLLECTION" Icon={CollectionIcon}/>
                <HeaderItems title="SEARCH" Icon={SearchIcon}/>
                <HeaderItems title="ACCOUNT" Icon={UserIcon}/>
            </div>
           <Image
            src="https://links.papareact.com/ua6"
            width={200} 
            height={50}
            className="object-contain"/>
        </header>
    )
}

export default Header
