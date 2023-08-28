import React from 'react'
import phone from './../assets/payments/payments-phone 1.svg'
import floor from './../assets/payments/floor.svg'
import pillar1 from './../assets/payments/pillar1.svg'
import pillar2 from './../assets/payments/pillar2.svg'
import pillar3 from './../assets/payments/pillar3.svg'
import pillar4 from './../assets/payments/pillar4.svg'
import pillar5 from './../assets/payments/pillar5.svg'
import pillar6 from './../assets/payments/pillar6.svg'
import pillar7 from './../assets/payments/pillar7.svg'
import pillar8 from './../assets/payments/pillar8.svg'
import pillar9 from './../assets/payments/pillar9.svg'

const Payments = () => {
    return (
        <section className='relative bg-#F8F6F6 w-screen overflow-hidden h-screen'>
            <img src={floor} className='absolute left-0 bottom-5 w-screen' style={{ zIndex: -1 }} />
            {/* ------text and phone ------ */}


            {/* ------------pillars and phone----------------- */}
            <div className='flex sm:inline-block sm:mx-auto xl:absolute justify-center align-middle pt-20 top-20 left-52'>
                <div className='self-center'>
                    <p className='text-left font-bold text-4xl text-green-500'>Payments</p>
                    <p className='text-left max-w-sm'>
                        Send and receive money with anyone, donate  to an important cause, or tip professionals.
                        Just enter a $cashtag, phone number, or
                        scan their  QR code to pay.
                    </p>
                </div>
            </div>
            <img src={phone} className='sm:block sm:m-auto xl:absolute top-10 right-72' />
            <img src={pillar1} className='absolute bottom-28 right-40' />
            <img src={pillar2} className='absolute bottom-6 right-0' />
            <img src={pillar3} className='hidden md:block absolute bottom-20 right-96' />
            <img src={pillar4} className='hidden xl:block absolute bottom-16 left-96' />
            <img src={pillar5} className='hidden md:block absolute bottom-16 left-64' />
            <img src={pillar6} className='hidden md:block absolute bottom-16 left-1/2' />
            <img src={pillar7} className='absolute bottom-6 right-1/2' />
            <img src={pillar8} className='hidden xl:block absolute bottom-0 right-72' />
            <img src={pillar9} className='absolute bottom-0' />
        </section>
    )
}

export default Payments