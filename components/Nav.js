import requests from "../utils/requests"
import {useRouter} from 'next/router'

function Nav() {

    const router = useRouter()

    return (
        <nav className="relative">
            <div className="flex space-x-10 sm:space-x-20 px-10 sm:px-16 whitespace-nowrap overflow-x-scroll scrollbar-hide  ">
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <h2 key={key} className="text-lg cursor-pointer hover:text-white transition duration-300 active:text-red-300 transform  hover:scale-125 last:pr-20"
                    onClick = {() => router.push(`/?genre=${key}`)}
                    >{title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
        </nav>
    )
}

export default Nav
