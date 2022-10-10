import React, { FC, useEffect, useState } from 'react'
import { createHistory, isExsitHistory, keyLocalHistory, removeHistory } from '../../utils/localstorage';


export interface HistoryCardInterface {
    container_num: string;
    time: string;
    removeHistory?: (num: string) => void
}


export const History: FC = () => {
    const [data, setData] = useState<HistoryCardInterface[]>([])

    useEffect(() => {
        if (!isExsitHistory()) {
            createHistory();
        }
        const getHistory = JSON.parse(localStorage.getItem(keyLocalHistory) || '{}')
        setData(getHistory)
    }, [setData,])

    const removeHistory = (num: string): void => {
        if (isExsitHistory()) {
            const historyList = JSON.parse(localStorage.getItem(keyLocalHistory) || '{}');
            const historyFilter = historyList.filter((item: any) => item.container_num !== num)
            const newHistory = [...historyFilter]
            localStorage.setItem(keyLocalHistory, JSON.stringify(newHistory))
            setData(newHistory);
        }
    }

    return (
        <>
            <div className='px-3'>
                <p className="tracking-normal text-gray-500 text-md font-semibold">Đã tìm kiếm:</p>
                {
                    (data.length > 0) ?
                        data.map((card, i) => {
                            const { container_num, time } = card
                            return (
                                <div key={i}>
                                    <HistoryCard container_num={container_num} time={time} removeHistory={removeHistory}/>
                                </div>
                            )
                        }
                        ) : (
                            <NullHistory />
                        )
                }

            </div>
        </>
    )
}

const HistoryCard: FC<HistoryCardInterface> = ({ container_num, time, removeHistory }) => {
    return (
        <>
            <div className="rounded-lg border-2 border-blue-500 my-3">
                <label className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg ">
                    <div className="block">
                        <div className="w-full text-xl font-bold text-gray-00">{container_num}</div>
                        <p className="font-normal text-gray-400">{time}</p>
                    </div>
                    <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => removeHistory(container_num)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>

                </label>
            </div>
        </>
    )
}

const NullHistory: FC = () => {
    return (
        <>
            <div className="flex justify-center py-12">
                <div className='text-gray-200'>
                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" /></svg>
                    <h1 className='text-center text-2xl'>Empty</h1>
                </div>
            </div>
        </>
    )
}