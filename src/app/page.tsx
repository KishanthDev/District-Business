import { Feautres } from '@/components/Feautres'
import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SellerTestimonials } from '@/components/SellerTestimonals'
import React from 'react'

const page = () => {
  return (
    <div >
      <Header/>
      <Hero/>
      <Feautres/>
      <SellerTestimonials/>
    </div>
  )
}
export default page