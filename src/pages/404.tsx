import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <img src="/img/notFound.png" alt="not-found" className='w-[50%] object-cover' />
      <h1 className='text-slate-900 font-medium text-4xl'>Halaman tidak ditemukan</h1>
    </div>
  )
}

export default NotFound
