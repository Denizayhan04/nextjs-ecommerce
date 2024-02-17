import React from 'react'

 const PageContainers = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='px-5 md:px-14'>{children}</div>
  )
}
export default PageContainers