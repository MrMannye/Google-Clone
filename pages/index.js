import Head from 'next/head'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'
import {ViewGridIcon, MicrophoneIcon} from '@heroicons/react/solid'
import Image from 'next/image'
import {SearchIcon} from '@heroicons/react/outline'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value; 

    if(!term) return; 
    router.push(`/search?term=${term}`);
  }

  return (
    <div className="p-5 flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className='flex w-full justify-between items-center text-sm text-gray-700'>
        <div className="header__left flex space-x-4 items-center">
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        <div className="header__right flex space-x-4 items-center">
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          {/* Icon */}
          <ViewGridIcon 
            className='h-10 w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer transition-all'/>
          {/* Avatar */}
          <Avatar url="https://scontent.fmex36-1.fna.fbcdn.net/v/t1.6435-9/139131446_2645255185599408_1493419385613931828_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uAGCZLy7T3MAX_cRK-k&_nc_ht=scontent.fmex36-1.fna&oh=c4cfda2be16ceb6fa88ee4be4e98ad57&oe=617DBB25"/>
        </div>
      </header>

      {/* Body */}
      <form action="" className='flex flex-col justify-center flex-grow items-center w-full'>
        <Image 
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
          height={100}
          width={300}
        />
        <div className='flex w-full text-gray-500 focus-within:text-black transition-all mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 items-center py-2 px-4 sm:max-w-xl' >
          <SearchIcon className='w-5 mr-3 text-gray-500' />
          <input ref={searchInputRef} type="text" className='focus:outline-none flex-grow'/>
          <MicrophoneIcon className='w-5 text-gray-500 ml-3'/>
        </div>

        <div className='flex flex-col w-1/2 mt-8 space-y-2 justify-center sm:flex-row sm:space-y-0  sm:space-x-3'>
          <button className='btn' onClick={search}>Google Search</button>
          <button className='btn' onClick={search}>I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer/>

    </div>
  )
}
