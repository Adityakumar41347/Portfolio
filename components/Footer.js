import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full pt-10 '>
      <div className='flex gap-10'>
         <img className='w-10 rounded-3xl' src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png" alt="" />
         <img className='w-10 rounded-3xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaMRGRXIcw7PLuQwrNT3owQpigxHG_LJNWQ&s" alt="" />
         <img className='w-10 rounded-3xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzEkaAN0BJ2o3ri2IsQRKXVk6ejQQqz0GUg&s" alt="" />
      </div>
      <div>
           Copyright ©2020 All rights reserved 
      </div>
    </div>
  )
}

export default Footer
