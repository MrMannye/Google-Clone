import Image from "next/image"
import {MicrophoneIcon, XIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import { useRouter } from "next/router"
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

export default function Header() {

    const router = useRouter();
    const searchInputRef = useRef(null);

    const search_word = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        router.push(`/search?term=${term}`);
    }

    return (
        <header className='px-6 pt-6 sticky top-0 bg-white'>
            <div className='flex w-full items-center'>
                <Image
                    loading="lazy"
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    height={30}
                    width={100}
                    className='cursor-pointer'
                    onClick={() => {
                        router.push("/");
                    }}
                />
                <form className='flex border ml-8 px-6 mr-5 border-gray-200 rounded-full shadow-lg items-center w-3/6'>
                    <input type="text" ref={searchInputRef} className='flex-grow py-2 w-full focus:outline-none text-gray-500 focus-within:text-black' />
                    <XIcon className='w-6 text-gray-500 cursor-pointer transform transition-all hover:scale-110 sm:mr-3'
                        onClick={() => searchInputRef.current.value = ""}
                    />
                    <MicrophoneIcon className='h-6 text-blue-500 cursor-pointer hidden sm:inline-flex border-l-2 mr-3 pl-4'/>
                    <SearchIcon className='w-6 text-blue-500 cursor-pointer hidden sm:inline-flex'/>
                    <button hidden type='submit' onClick={search_word}>Search</button>
                </form>
                <Avatar className='ml-auto' url="https://scontent.fmex36-1.fna.fbcdn.net/v/t1.6435-9/139131446_2645255185599408_1493419385613931828_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uAGCZLy7T3MAX_cRK-k&_nc_ht=scontent.fmex36-1.fna&oh=c4cfda2be16ceb6fa88ee4be4e98ad57&oe=617DBB25"/>
            </div>
            
            <HeaderOptions/>

        </header>
    )
}
