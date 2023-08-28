import React from 'react'
import cubes from './../assets/banking/cubes.svg'
import hole1 from './../assets/banking/hole.svg'
import hole2 from './../assets/banking/hole2.svg'
import monster from './../assets/banking/monster.svg'
import phone from './../assets/banking/phone.svg'
import ramp1 from './../assets/banking/ramp1.svg'
import ramp2 from './../assets/banking/ramp2.svg'
import stairs1 from './../assets/banking/stairs1.svg'
import stairs2 from './../assets/banking/stairs2.svg'
import track1 from './../assets/banking/track1.svg'
import track2 from './../assets/banking/track2.svg'
import tube from './../assets/banking/tube.svg'
import column from './../assets/banking/column.svg'

const Banking = () => {
    return (
        <div className='relative w-screen h-screen' style={{ backgroundColor: '#00D54B' }}>
            <img src={hole1} className='absolute hidden sm:block top-0 left-0 h-1/5' />
            <img src={track2} className='absolute hidden md:block top-8 right-32' />
            <img src={column} className='absolute hidden md:block top-16 left-16' />
            <img src={track1} className='hidden lg:block absolute top-28 left-1/4' />
            <img src={ramp1} className='hidden xl:block absolute top-44 right-64' />
            <img src={phone} className='absolute top-1/4 right-4 sm:bottom-1/4 sm:right-1/4 sm:right-32 lg:right-1/4 xl:right-1/3'/>
            <img src={stairs2} className='hidden lg:block absolute top-1/3 right-32' />
            <img src={stairs1} className='absolute hidden lg:block left-12 bottom-32' />
            <img src={ramp2} className='hidden sm:block absolute left-8 bottom-10 md:left-32' />
            <img src={cubes} className='absolute hidden xl:block bottom-16 right-80' />
            <img src={monster} className='absolute bottom-16 right-16 md:right-32' />
            <img src={tube} className='absolute hidden md:block bottom-0 md:left-1/4 lg:right-1/2' />
            <img src={hole2} className='absolute bottom-0 right-36' />
            <div className='flex mx-auto sm:absolute md:left-16 lg:left-32 pt-10 top-1/3 xl:left-52'>
                <div className='self-center'>
                    <p className='sm:text-left font-bold text-4xl text-white'>Banking</p>
                    <p className='sm:text-left text-sm max-w-sm'>
                        Receive your paycheck, tax returns, and other direct deposits up to two days early using your Cash App routing
                        and account number.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banking