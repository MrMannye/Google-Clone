export default function SearchResults({results}) {
    return (
        <div className='mx-auto w-full px-6 sm:pl-[5%] md:pl-[14%] lg:pl-32 transition-all'>
            <p className='text-gray-600 text-sm mb-5 mt-4'>
                About {results.searchInformation?.formattedTotalResults} results ( {results.searchInformation?.formattedSearchTime} seconds )
            </p>

            {results.items?.map(result => {
                return(
                    <div key={result.link} className='max-w-xl mb-8'>
                        <div className='group'>
                            <a href={result.link} className='text-sm'>
                                {result.formattedUrl}
                            </a>
                            <a href={result.link} className=''>
                                <h2 className='mb-2 truncate group-hover:underline text-xl text-blue-800 font-medium'>
                                    {result.title}
                                </h2>
                            </a>
                        </div>
                        <p className='text-gray-800 line-clamp-2'>{result.snippet}</p>
                    </div>
                )
            })}

        </div>
    )
}
