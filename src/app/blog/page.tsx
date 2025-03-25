import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="p-4 flex justify-center text-4xl font-bold">Blog</h1>
      </main>

      <Footer />
    </div>
  )
}
