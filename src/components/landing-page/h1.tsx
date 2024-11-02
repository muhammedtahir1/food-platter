import React from 'react'

export default function H1({children} : {children : React.ReactNode}) {
  return (
    <div className='text-center text-2xl md:text-3xl font-semibold capitalize my-6 md:my-8'>{children}</div>
  )
}
