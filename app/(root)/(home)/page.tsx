import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {
  const d = new Date();
  let time=d.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})
  let hour= new Date().getHours();
  let min=new Date().getMinutes();
  const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  let month = months[d.getMonth()];
  const day= days[new Date().getDay()];
  let date= d.getDate();
  let year= d.getFullYear();
  return (
    <section className='flex size-full flex-col gap-10 text-white'> 
    <div className='h=[300px] w-full rounded-[20px] bg-hero bg-cover '>
      <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
        <h2 className=' glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meeting at: 12:30</h2>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl pl-8  mt-[60px] font-extrabold lg:text-7xl'>
            {time}
          </h1>
          <p className='text-lg pl-8 font-medium mb-[20px]text-sky-1 lg:text-2xl'>{day}, {month} {date},{year}</p>
        </div>
      </div>
    </div>
    <MeetingTypeList />
    </section>
  )
}

export default Home