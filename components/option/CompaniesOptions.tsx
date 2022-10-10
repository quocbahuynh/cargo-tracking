import React, { FC } from 'react'
import { Company } from '../../data/types'

interface CompaniesOptionsProp {
  options: Company[]
  choose: (option: Company) => void;
}

interface CompanyOption {
  data: Company;
  choose: (option: Company) => void;
}

const CompanyOption: FC<CompanyOption> = (props) => {
  const { data, choose } = props
  const { name, icon, api, status } = data
  return (
    <>
      <li>
        <button type="button" className={`text-white focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-lg px-5 py-3.5 w-full text-center inline-flex items-center  mr-2 mb-2 ${status ? "bg-blue-700" : "bg-blue-300"}`} disabled={!status} onClick={() => choose(data)}>
          <svg aria-hidden="true" className="mr-2 -ml-1 w-10 h-3" viewBox="0 0 256 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.812 0L0 63.76H34.492L38.768 53.594H48.542L52.818 63.76H90.784V56.001L94.167 63.76H113.806L117.189 55.837V63.76H196.148L205.749 53.858L214.739 63.76L255.294 63.842L226.391 32.058L255.294 0H215.368L206.022 9.71899L197.315 0H111.418L104.042 16.457L96.493 0H62.073V7.495L58.244 0C58.244 0 28.812 0 28.812 0ZM35.486 9.05399H52.299L71.41 52.29V9.05399H89.828L104.589 40.054L118.193 9.05399H136.519V54.806H125.368L125.277 18.955L109.02 54.806H99.045L82.697 18.955V54.806H59.757L55.408 44.549H31.912L27.572 54.797H15.281C15.281 54.797 35.486 9.05399 35.486 9.05399ZM146.721 9.05399H192.063L205.931 24.034L220.246 9.05399H234.114L213.043 32.049L234.114 54.779H219.617L205.749 39.625L191.361 54.779H146.721V9.05399ZM43.665 16.795L35.924 35.067H51.397L43.665 16.795ZM157.918 18.527V26.879H182.654V36.188H157.918V45.306H185.663L198.555 31.876L186.21 18.519H157.918V18.527Z" fill="white" /></svg>
          {name}
        </button>


      </li>
    </>
  )
}

export const CompaniesOptions: FC<CompaniesOptionsProp> = ({ options, choose }) => {
  return (
    <>
      <div className="py-4 px-6 rounded-t border-b border-blue-600">
        <h3 className="text-base font-semibold text-gray-900 text-xl text-blue">
          Chọn Doanh Nghiệp
        </h3>
      </div>
      {/* Modal body */}
      <div className="p-6">
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Lựa chọn doanh nghiệp theo mã hàng được cung cấp.</p>
        <ul className="my-4 space-y-3">
          {
            options.map((option, i) =>
              <div key={i}>
                <CompanyOption data={option} choose={choose} />
              </div>
            )
          }
        </ul>
      </div>
    </>
  )
}
