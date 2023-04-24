import React from 'react'

const Form = () => {
  return (
    <section className='flex flex-col items-center justify-center m-[5rem]'>
        <h1 className='text-[#6C63FF] text-[3rem] font-[600] m-4'>ADD YOUR TO DO LIST !!</h1>
        <input className=' outline-none border-[3px] border-[#adadad] focus:border-[#6C63FF] p-2 w-[50rem] text-[1.25rem] rounded-xl m-4 shadow-lg text-slate-400' type="text" placeholder='Write yore next To Do' />
        <button className='text-[#fff] bg-[#bdbaff] hover:bg-[#6C63FF] py-3 px-8 my-2 rounded-xl hover:shadow-[0_0_8px_#6C63FF] transition-all hover:-translate-y-2 hover:scale-110 duration-300'>ADD</button>
    </section>
  )
}

export default Form