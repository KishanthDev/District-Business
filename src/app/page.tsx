import { Features } from '@/components/Feautres'
import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SellerTestimonials } from '@/components/SellerTestimonals'
import React from 'react'
import Head from 'next/head'

const page = () => {
  return (
    <div >
      <Head>
        <title>District Business Website</title>
        <meta name="description" content="This is my awesome Next.js site with great content." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Hero />
      <Features />
      <SellerTestimonials />
      <Footer />
    </div>
  )
}
export default page