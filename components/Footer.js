import { GlobeIcon } from "@heroicons/react/solid"

export default function Footer() {
    return (
        <footer className='flex w-full flex-col divide-gray-300 bg-gray-100 text-sm text-gray-500 ' >
            <div className='flex justify-center items-center py-3 sm:justify-start sm:px-8'>
                <GlobeIcon className='w-5 text-green-700'/> Manu Copyright
            </div>
            <div className='flex flex-col space-y-2 px-8 py-3 sm:flex-row sm:items-center sm:justify-between'>
                <div className='flex justify-center space-x-8' >
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search works</p>
                </div>
                <div className='flex justify-center space-x-8 md:ml-auto'>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    )
}
