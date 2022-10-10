import React, {FC, PropsWithChildren} from 'react'

export const AppLayout: FC<PropsWithChildren<any>> = ({children}) => {
  return (
    <div className='container'>{children}</div>
  )
}
