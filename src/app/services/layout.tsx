import React from 'react'

export default function ServiceLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className='bg-[#F5F0F6]'>
        {children}
      </div>
    );
}
