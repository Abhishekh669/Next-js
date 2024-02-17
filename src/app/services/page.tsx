import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

function Servicepage() {
  return (
    <div className='px-4 md:px-8 bg-[#F5F0F6] my-2 md:my-0 mb-4'>
      <p className='text-red-600 text-[1.5rem] md:text-[2rem] md:mx-4 font-semibold'>Services</p>
      <div>
        <p className=' text-center text-[1.4rem] font-semibold  md:my-3'><span className='text-red-600 '>"</span>Learning nevers stop<span className='text-red-600'>"</span></p>
        <p className='text-justify  md:text-[1.2rem] md:w-[50%] md:mx-auto my-2 md:my-4 mx-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet culpa
          at impedit, magnam tempora cupiditate corrupti! Adipisci natus ullam
          architecto!
        </p>
        <div className='my-2 md:my-8 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-10 md:px-16'>
            <div className='my-2  pt-4 px-2 md:pt-8 hover:bg-black hover:text-white rounded-lg  border-2 border-red-600 py-2'>
                <Image
                    className='mx-auto border border-red-600  drop-shadow-2xl rounded-[15px] '
                    width={300}
                    height ={100}
                    src="/bootcamp.jpg"
                    alt ="hacking course "
                />
                <p className='font-semibold text-center my-2 text-[1rem] hover:text-red-600 hover:underline'>Cyber Security and Hacking full course </p>
                <p className='text-red-600 text-[0.8rem]  mx-2 my-2   md:text-center md:mb-8'><span className='text-[1rem] '>Special Discount :  40% Discount for 12 months </span></p>
            </div>
            <div className='my-2 border-2 pt-4 px-2 md:pt-8 hover:bg-black hover:text-white rounded-lg border-red-600 '>
                <Image
                    className='mx-auto border border-red-600 drop-shadow-2xl rounded-[15px] '
                    width={300}
                    height ={100}
                    src="/bootcamp.jpg"
                    alt ="web develpment "
                />
                <p className="font-semibold text-center my-2 text-[1rem] hover:text-red-600 hover:underline">Web development full course</p>
                <p className='text-red-600 text-[0.8rem]  md:text-center md:mb-8mx-2 my-2'><span className='text-[1rem] '>Special Discount : 40% Discount for 12 months </span></p>
             </div>
            <div className='my-2  pt-4 px-2 md:pt-8 hover:bg-black hover:text-white rounded-lg border-2 border-red-600'>
                <Image
                    className='mx-auto border border-red-600 drop-shadow-2xl rounded-[15px] '
                    width={300}
                    height ={100}
                    src="/bootcamp.jpg"
                    alt ="System Design "
                />
                <p className="font-semibold text-center my-2 text-[1rem] hover:text-red-600 hover:underline">System Design fundamentals</p>
                <p className='text-red-600 text-[0.8rem]  md:text-center md:mb-8mx-2 my-2'><span className='text-[1rem] '>Special Discount : 40% Discount for 12 months </span></p>
            </div>
            <div className='my-2 border-2 pt-4 px-2 md:pt-8 hover:bg-black hover:text-white rounded-lg border-red-600 '>
                <Image
                    className='mx-auto border border-red-600 drop-shadow-2xl rounded-[15px] '
                    width={300}
                    height ={100}
                    src="/bootcamp.jpg"
                    alt ="hacking course "
                />
                <p className="font-semibold text-center my-2 text-[1rem] hover:text-red-600 hover:underline">Artifical INtelligence(AI)</p>
                <p className='text-red-600 text-[0.8rem] md:text-center md:mb-8 mx-2 my-2'><span className='text-[1rem] '>Special Discount : 40% Discount for 12 months </span></p>
            </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>
                Card Title
              </CardTitle>
              <CardDescription>
                this is the description of the card.
              </CardDescription>
            </CardHeader>
            <CardContent>
              this is the content of the card.
            </CardContent>
            <CardFooter>
              this is the footer oft the card.
            </CardFooter>
            
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Servicepage