"use client"
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  
  
  
  
  return <MaxWidthWrapper>
    <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
      <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
        Your Market place for <span className='text-blue-600'> digital </span> Products/Assets.</h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Welcome to DigitalMarket. Every asset on our platform is unverified by our team to ensure Their freedom and standards</p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <Link href='/products' className={''}>Browse Trending</Link>
        </div>
    </div>

  </MaxWidthWrapper>
}
