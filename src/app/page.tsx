import { Feautres } from '@/components/Feautres'
import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <div >
      <Header/>
      <Hero/>
      <Feautres/>
    </div>
  )
}
export default page