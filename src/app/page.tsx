import { Features } from '@/components/Feautres'
import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SellerTestimonials } from '@/components/SellerTestimonals'
import React from 'react'

const page = () => {
  return (
    <div >
      <Header/>
      <Hero/>
      <Features/>
      <SellerTestimonials/>
      <Footer/>
    </div>
  )
}
export default page