import HeaderOption from "./HeaderOption"
import { DotsVerticalIcon, 
        MapIcon, 
        NewspaperIcon,
        PhotographIcon,
        PlayIcon, 
        SearchIcon } from "@heroicons/react/outline"


export default function HeaderOptions() {
    return (
        <div className='mt-6 border-b-[1px] flex w-full justify-evenly text-gray-800 lg:text-base lg:justify-start lg:pl-4'>
            {/* Left */}
            <div className='flex space-x-6'>
                <HeaderOption Icon={SearchIcon} title="All" selected/>
                <HeaderOption Icon={PhotographIcon} title="Images" />
                <HeaderOption Icon={PlayIcon} title="Videos" />
                <HeaderOption Icon={NewspaperIcon} title="News" />
                <HeaderOption Icon={MapIcon} title="Maps" />
                <HeaderOption Icon={DotsVerticalIcon} title="More" />
            </div>
            {/* Right */}
            <div className='flex space-x-4 text-sm lg:ml-auto lg:mr-10'>
                <p className='link'>Settings</p>
                <p className='link'>Tools</p>
            </div>
        </div>
    )
}
