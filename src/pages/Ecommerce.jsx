import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import {Pie,Button} from '../components'
import Stacked from '../components/Charts/Stacked'
import SparkeLine from '../components/Charts/SparkeLine'
import { earningData, SparklineAreaData,ecomPieChartData } from '../data/dummy'


import { useStateContext } from '../context/contextProvider'


function Ecommerce() {
  const {currentColor}=useStateContext()
  
  
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
        h-60 rounded-xl w-full lg:w-100 p-8 pt-9 m-3 bg-hero-pattern
        bg-no-repat bg-cover bg-center'>
<div className='flex justify-between items-center '>
  <div >
  <p className='font-bold text-gray-400' >Earnings</p>
  <p className='text-2xl ' >$117,235</p>
</div></div>
      <div className='mt-6'>
        <Button 
        color='white'
        bgColor={currentColor}
        text='Download'
        borderRadius='10px'
        size='md'/>


        </div>
      </div>
      <div className='flex m-3 flex-wrap justify-center gap-1 items-center' >
        {earningData.map((item)=>(
          <div key={item.title}
          className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
          p-4 pt-9 rounded-2xl'>
          <button
          type='button'
          style={{color:item.iconColor,backgroundColor:item.iconBg}}
          className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
          >{item.icon}</button>
          <p className='mt-3'>
           <span className='text-lg font-semibold'>{item.amount}</span>
           <span className={`text-sm text-${item.pcColor} ml-2`}> {item.percentage}</span>
           </p>
           <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
          

          </div>
        ))}
      </div>
      </div>


<div className='flex gap-10 flex-wrap justify-center'>
  <div className='bg-white dark:text-gray-200
   dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780'>
    <div className='flex justify-between'>
      <p className='font-semibold text-xl'>
        Revenue Updates
      </p>
      <div className='flex items-center gap-4'><p className='flex items-center gap-4 text-gray-600 hover:drop-shadow-xl'>
        <span><GoPrimitiveDot/></span>
        <span>Expense</span>
      </p>
      
      <div className='flex items-center gap-4'><p className='flex items-center gap-4 text-green-400 hover:drop-shadow-xl'>
        <span><GoPrimitiveDot/></span>
        <span>Budget</span>
      </p>
      </div>
      </div>
    </div>
<div className='mt-10 flex gap-10 flex-wrap justify-center'>
  <div className='border-r-1 border-color m-4 pr-10'>
    <p>
      <span className='text-3xl font-semibold'>$82,438</span>
      {/* <span className='p-1.5 hover:drop-shadow-xl curser-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>37%</span> */}
    </p>
    <p className=' text-sm text-gray-600 mt-1 ' >Budget</p>

  <div className='border-r-1 border-color mt-4 pr-10'>
    <p>
      <span className='text-3xl font-semibold'>$22,438</span>
      {/* <span className='p-1.5 hover:drop-shadow-xl curser-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>Budget</span> */}
    </p>
    <p className=' text-gray-600 mt-1 '>Expense</p>
  </div>
  <div className='mt-5'>
    {/* <SparkeLine
    currentColor='blue'
    id='line-sparkline'
    type='Line'
    height='80px'
    width='250px'
    data={SparklineAreaData}
    color='blue'
    /> */}

  </div>
  </div>
<div><Stacked width='320px' height="360"/></div>
</div>
  </div>

</div>



</div> 
)}

export default Ecommerce