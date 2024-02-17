"use client"
import { Input, Button } from '@/components';
import { IoMdSend } from "react-icons/io";

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { error } from 'console';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast';

interface Inputs {
  name: string;
  email: string;
  phone: number;
  message?: string;
}
function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const submit = async (data: Inputs) => {
    try {
      const response = await fetch('/api/contacts', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json"
        }
      })
      toast({
        title: "Added to db",
      })

    } catch (error) {
      toast({
        title: "Failed to add data",
        variant: "destructive"
      })
    }
  };



  // const submit = (data:any) =>{
  //   console.log("this is data : ",data)

  // }
  return (
    <>
      <div className='w-full  mt-3 text-[1.5rem] md:ml-12  bg-[#F5F0F6] md:text-[2rem] font-semibold text-red-600 px-4 md:px-6'><span  >Contact Us</span></div>
      <div className='w-full py-4 md:px-20  px-4  md:flex '>
        <form onSubmit={handleSubmit(submit)} className='w-full md:w-[50%] border-2 border-red-600 py-4 px-8 '>
          <Input
            label="Name :"
            labelClassName="text-red-600"
            placeholder='Enter your name'
            className='hover:border-red-600'
            {...register("name", {
              required: true

            })}


          />
          <Input
            label="Email :"
            labelClassName='text-red-600'
            type="email"
            placeholder='enter your email address'
            className='hover:border-red-600'
            {...register("email", {
              required: true

            })}


          />
          <div className='flex flex-col lg:px-10  '>
            <label htmlFor="" className='my-1 text-red-600'>Your Message :</label>
            <textarea className='p-2 w-full  rounded-md lg:w-[80%] hover:border-2 hover:border-red-600  lg:min-h-[12rem] lg:max-h-[12rem] outline-none' placeholder='your message...' id="" rows={8}  {...register("message", {
              required: true

            })}>

            </textarea>
          </div>
          <div className='my-3 w-full lg:w-[70%] lg:ml-[2.30rem]' >
            <Button className='w-full flex justify-center ' >Send message&nbsp; {<IoMdSend className='text-[1.5rem] hover:text-red-600' />}</Button>

          </div>
        </form>
        <div className='w-full md:w-[50%] ml-4  py-10 md:px-5 px-2 flex flex-col '>
          <p className="text-[2rem] text-black font-semibold" ><span className='  underline underline-offset-3 decoration-red-600'>Get</span> In <span className='text-red-600'>Touch</span></p>
          <div className='w-[80%] my-4 '>
            <p className='text-justify text-[0.8rem]  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet culpa at impedit, magnam tempora cupiditate corrupti! Adipisci natus ullam architecto!</p>
          </div>

          <div className=''>
            <ul className=''>
              <li className='my-2'><span className='text-[1.2rem] md:text-[1.4rem] font-semibold text-red-600'>Office Address</span> <br /> <span className='text-[0.8rem]'>Bagar, Pokhara</span></li>
              <li className='my-2'><span className='text-[1.2rem] md:text-[1.4rem] font-semibold text-red-600'>Call Us</span>  <br /><span className='text-[0.8rem]'>9887463</span></li>
              <li className='my-2'><span className='text-[1.2rem] md:text-[1.4rem] font-semibold text-red-600'>Mail Us</span> <br /> <span className='text-[0.8rem]'>example@gmail.com</span></li>
            </ul>
          </div>


        </div>

      </div>
    </>
  )
}

export default Contact;
