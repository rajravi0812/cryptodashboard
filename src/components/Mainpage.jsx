import React from 'react'
import Searchbar from './Searchbar'
import Currencyxng from './Currencyxng'
import Graphbar from './Graphbar'
import Rightsidebar from './Rightsidebar'


function Mainpage() {
  return (
    <div className='margin bg-slate-100 grid grid-rows-1 rounded-md overflow-hidden'>
      <div className='grid lg:grid-cols-12 gap-4  m-3 '>
        <div className=' lg:col-span-9 col-span-6 gap-4'>
          <div className='grid grid-rows-1 '>
                <Searchbar/>
          </div>
{/* graphs  */}
          <div className='grid grid-rows-1 rounded-lg bg-white mb-3 mt-1'>
               <Graphbar/>
          </div>
{/* currency exchage part */}
          <div className='grid grid-rows-1 mt-2'>
                <Currencyxng/>
          </div>
        </div>
{/*right sidebar   */}
        <div className='scrollmain lg:col-span-3 col-span-6 gap-3'>
          <Rightsidebar />
        </div>
      </div> 
    </div>
  )
}

export default Mainpage
