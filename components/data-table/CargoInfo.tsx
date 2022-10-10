import React, { FC } from 'react'
import { Cargo } from './type'


export const CargoInfo: FC<Cargo> = ({ container_num, container_size, container_type }) => {
    return (
        <>
            <div className="flex p-4 mb-4 bg-blue-100 border-t-4 border-blue-500 dark:bg-blue-200 rounded-md" role="alert">
                <ul className="mt-1.5 ml-4 text-blue-700 list-none font-sans">
                    <li className='font-semibold'>Container:  <span className='font-bold'>{container_num}</span></li>
                    <li className='font-semibold'>Size: <span className='font-bold'>{container_size}</span></li>
                    <li className='font-semibold'>Type: <span className='font-bold'>{container_type}</span></li>
                </ul>
            </div>

        </>
    )
}
