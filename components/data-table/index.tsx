import React, { FC } from 'react'
import { CargoInfo } from './CargoInfo';
import { Location } from './Location'

interface Props {
    data: any
}

export const TimeLine: FC<Props> = ({ data }) => {
    const { container_num, container_size, container_type, locations } = data[0]
    const lastest = (length: number, index: number): boolean => {
        if (length === index) {
            return true
        } else {
            return false;
        }
    }
    return (
        <>

            <div className='px-3'>

                <CargoInfo
                    container_num={container_num}
                    container_size={container_size}
                    container_type={container_type}
                />
            </div>
            <div className='px-6'>
                <ol className="relative mt-9 border-l border-blue-200 dark:border-blue-700">
                    {
                        locations.slice().reverse().map((terminal: any, y: number) =>

                            terminal.events.map((event: any, i: number) => {
                                const evnlength = terminal.events.length - 1;
                                return (
                                    <>
                                        <div key={i}>
                                            <Location event={event} terminal={terminal} lastest={false} />
                                        </div>
                                    </>
                                )
                            })
                        )
                    }
                </ol>
            </div>
        </>
    )
}
