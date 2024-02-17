"use client"
import { toast } from '@/components/ui/use-toast'
import { afterEach } from 'node:test'
import React, { useEffect, useState } from 'react'
type DBData = {
  _id: string,
  name: string,
  email: string,
  message: string,
}
const page = () => {
  const [dbData, setDbData] = useState<DBData[]>([])
  const [btnState, setBtnState] = useState<Boolean>(false);

  const getDataFromDatabase = async () => {
    const response = await fetch("/api/contacts")
    if (!response.ok) {
      toast({
        title: "Failed to get data",
        variant: "destructive"
      })
    }
    const data = await response.json()
    setDbData(data)
  }
  useEffect(() => {
    getDataFromDatabase();
  }, [dbData])
  console.log(dbData)
  return (
    <div className='flex flex-col items-center gap-4'>
      {
        dbData.map((data) => (
          <div
            key={data._id}
            className='flex border-b gap-7 w-full px-4 justify-start'
          >
            <p className='w-[20rem]'>Name: {data.name}</p>
            <p className='w-[25rem]'>Email: <span className='font-bold'>{data.email}</span></p>
            <div className='flex gap-4'>
              <p>Message: </p>
              <p className='truncate w-full max-w-[80rem]'>
                {data.message}
              </p>
            </div>
              <button className = "border border-black" >{btnState ? "save" : "update"}</button>
          </div>
        ))
      }
    </div>
  )
}

export default page
