import { useState } from 'react';
import { currentTime } from '../utils/time';
import { SearcBar } from '../components/form/SearchBar';
import { TimeLine } from '../components/data-table';
import { NextPage } from 'next';
import { ListSkeleton } from '../components/skeleton/list';
import { ErrorDisplay } from '../components/skeleton/error';
import companiesList from '../data/companies';
import { Company } from '../data/types';
import { httpClient } from '../utils';
import { Modal } from '../components/Modal';
import { CompaniesOptions } from '../components/option/CompaniesOptions';
import Head from 'next/head';
import { History } from '../components/history';
import { pushHistory } from '../utils/localstorage';


const Home: NextPage = () => {
  const [showHistory, setShowHistory] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [data, setData] = useState(null);

  const [chooseOption, setChooseOption] = useState<Company>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [onError, setOnError] = useState<boolean>(false);


  const onChangeSearch = (num: string): void => {
    console.log(num)
    setSearchValue(num.trim())
  }

  const showOptionModal = (): void => {
    if (searchValue === '') {
      return;
    }
    setShowOptions(true)
  }


  const handleChoose = async (option: Company): Promise<void> => {
    setShowHistory(false)
    setShowOptions(false)
    setData(null)
    setOnError(false)
    setIsLoading(true)

    const { name, api } = option;

    const requestBody = {
      url: `${api}${searchValue}`
    }

    try {
      const requestAPI = await httpClient.get(requestBody)
      console.log(requestAPI.data)
      setIsLoading(false)
      setData(requestAPI.data)
      pushHistory(searchValue)
    } catch (error) {
      setIsLoading(false)
      setOnError(true)
    }
  }

  return (
    <>
      <Head>
        <title>Cargo Tracking</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='wrapper h-full overflow-auto'>
        <div className='header bg-blue-600 h-48 px-3 text-white pt-6'>
          <h1 className="text-4xl font-bold mb-2">Cargo Tracking</h1>
          <p className="text-base font-semibold mb-6">{currentTime().stringTime}</p>
          <SearcBar handleSearch={showOptionModal} searchValue={searchValue} onChangeSearch={onChangeSearch} />
        </div>
        <div className='main pt-6'>

          {
            showHistory && <History />
          }
          {
            data && <TimeLine data={data} />
          }

          {
            isLoading && <ListSkeleton />
          }

          {
            onError && <ErrorDisplay />
          }

        </div>


        <Modal status={showOptions} close={() => setShowOptions(false)}>
          <CompaniesOptions options={companiesList} choose={handleChoose} />
        </Modal>
      </div>
    </>
  )
}

export default Home
