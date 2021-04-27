import Image from 'next/image'
import {forwardRef} from 'react'

const Thumbnail =forwardRef(({result},ref) =>  {

    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <div ref={ref} className="group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ml-5">
            <Image 
            layout="responsive"
            width={1080}
            height={520}
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
            />
            <div className="p-2">
            <p className="truncate max-w-md">{result.overview}</p>
            <h2 className="mt-2 text-white text-2xl transition-all duration-100 ease-in-out group-hover:font-bold mb-3">{result.title || result.original_name}</h2>
            </div>
        </div>
        
    )
})

export default Thumbnail
