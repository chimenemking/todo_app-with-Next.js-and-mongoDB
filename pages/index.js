import Form from '<@>/components/form'
import Table from '<@>/components/table'
import Head from 'next/head'
import {BiUserPlus} from 'react-icons/bi'
import { useState } from 'react'

export default function Home() {

  const [visible, setVisible]= useState(false)

  const handler=()=>{
    setVisible(!visible)
  }

  return (
    <>
    <section>
        <Head>
          <title>My Application</title>
        </Head>
        <main className='py-5'>
          <h1 className='text-xl md:text-5xl text-center font-bold py-10'>Management System</h1>
        <div className='container mx-auto flex justify-between py-5 border-b'>
         <div className='left flex gap-5'>
         <button onClick={handler} className='flex bg-indigo-700 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800'>
            Add Employee<span className='px-1'><BiUserPlus size={23}></BiUserPlus></span>
          </button>
         </div>
        </div>
        {/* collapsible forn */}
      
      {visible? <Form></Form>:<></>}

         <div className='container mx-auto'>
         <Table></Table>
         </div>
        </main>
    </section>
    </>
  )
}
