import React from 'react'

export default function AddTopic() {
  return (
    <form className='flex flex-col gap-2'>
      <input className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Title' />
      <input className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Description' />

      <button className='bg-green-600 font-bold text-white rounded-md py-2 px-5 w-fit'>Add Topic</button>
    </form>
  )
}
