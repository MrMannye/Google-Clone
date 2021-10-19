import { useRouter } from "next/router"
import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

function PaginationButtons() {

    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
    return (
        <div className='flex items-center max-w-lg justify-between text-blue-700 mb-10'>
            { startIndex >= 10 && (
                <Link href={`/search?tern=${router.query.term}&start=${startIndex - 10}`}>
                    <div className='flex flex-grow flex-col cursor-pointer hover:underline items-center'>
                        <ChevronLeftIcon className='h-6'></ChevronLeftIcon>
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
                    <ChevronRightIcon className='h-6'></ChevronRightIcon>
                    <p>Next</p>
                </div>
            </Link>
        </div>
    )
}

export default PaginationButtons
