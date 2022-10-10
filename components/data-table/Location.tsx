import React, { FC } from 'react'
import { convertISO } from '../../utils/time'
interface Icon {
    status: string,
}
const RkemIcon: FC<Icon> = ({ status }) => {
    switch (status) {
        case "GATE-OUT":
            return (
                <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                </>
            )
        case "GATE-IN":
            return (
                <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                </>
            )

        case "LOAD" || "DISCHARG":
            return (
                <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </>
            )
        case "DISCHARG":
            return (
                <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </>
            )

        default:
            break;
    }
}

export const Location: FC<any> = ({ event, terminal, lastest }) => {

    const { actual_time, rkem_move, vessel_name, stempty, is_cancelled } = event;
    const { city, country, state, terminal: terAddress } = terminal;

    return (
        <>
            <li className="mb-10 ml-4">

                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-blue-900 dark:bg-blue-700" />
                <time className="mb-1 text-lg font-bold leading-none text-blue-500 dark:text-blue-500">{terAddress}</time>
                {
                    lastest && <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span>
                }
                <br />
                <time className="mb-1 text-sm font-normal font-sans leading-none text-gray-400 dark:text-gray-500">{convertISO(actual_time)}</time>

                <p className="mt-3 text-base font-medium font-sans text-gray-500 dark:text-gray-500">{rkem_move}</p>
                <time className="mb-1 text-sm font-normal font-sans leading-none text-gray-400 dark:text-gray-500">City: {city} - {country}</time>
            </li>

        </>
    )
}
