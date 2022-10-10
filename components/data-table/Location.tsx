import React, { FC } from 'react'
import { convertISO } from '../../utils/time'
interface Icon {
    status: string,
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
