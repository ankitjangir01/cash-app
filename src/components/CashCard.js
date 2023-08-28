import React from 'react'
import stairs1 from './../assets/cashcard/stairs1.svg'
import stairs2 from './../assets/cashcard/stairs2.png'
import phone from './../assets/cashcard/phone.svg'

const CashCard = () => {
    return (
        <div className='relative top-0 block w-screen h-screen bg-black overflow-hidden'>
            <img src={stairs1} className='absolute left-0 bottom-0 max-w-full' />
            <img src={phone} className='absolute -bottom-12 h-2/3 lg:h-4/5 right-6 md:right-20 md:bottom-20 lg:right-1/3' style={{ zIndex: 1 }} />
            <img src={stairs2} className='hidden lg:block absolute right-0 bottom-0 h-full' />
            <div className='flex sm:inline-block sm:mx-auto sm:absolute justify-center align-middle pt-20 top-20 left-28 xl:left-52'>
                <div className='self-center'>
                    <p className='sm:text-left font-bold text-4xl' style={{color: '#00D54B'}}>Cash Card & Boost</p>
                    <p className='sm:text-left max-w-sm text-white'>
                        The Cash Card is a free, customizable debit card that lets you pay online and in stores. It’s the only way to get Boosts—instant discounts that work at places where you want to spend.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CashCard