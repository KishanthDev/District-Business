import React from 'react'
import Image from 'next/image'

export const Feautres = () => {
    return (
        <div className='px-20'>
            <h1 className='text-4xl text-orange-800 font-medium'>Feautres Section</h1>
            <div className='flex justify-between p-7'>
                <div>
                    <Image alt='pic1' width={150} height={150} src="/pic1.png" />
                    <p className='mt-3.5 text-xl text-orange-600'>No Sales Commissions</p>
                </div>
                <div>
                    <Image alt='pic2' width={150} height={150} src="/pic2.png" />
                    <p className='mt-3.5 text-xl text-orange-600'>Integrated Advertising</p>
                </div>
                <div>
                    <Image alt='pic3' width={150} height={150} src="/pic3.png" />
                    <p className='mt-2 text-xl text-orange-600'>Affordable store Rentals</p>
                </div>
            </div>
        </div>
    )
}
