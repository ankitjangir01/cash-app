import React from 'react'
import mobile from './../assets/intro-phone 1.svg'
import introCube from './../assets/intro-cube 1.svg'
import introStairs from './../assets/intro-stairs 1.svg'
import introCubes from './../assets/intro-cubes 1.svg'
import introPillar from './../assets/intro-pillar 1.svg'
import Navbar from './Navbar'
import Footer from './Footer'
import Payments from './Payments'

const Hero = () => {
    return (
        <>
            <Navbar />
            <div className='hero flex w-screen'>
                <div className='intro flex flex-col self-center justify-self-center m-auto'>
                    <span className='text-9xl font-extrabold'>CASH</span>
                    <img src={mobile} className='absolute' />
                    <span className='text-9xl font-extrabold' style={{ zIndex: 1 }}>APP</span>
                </div>
                <div className='hidden md:block absolute top-20 left-20'>
                    <img src={introCube} />
                </div>
                <div className='hidden md:block absolute top-10 right-20'>
                    <img src={introStairs} />
                </div>
                <div className='hidden md:block absolute bottom-10 left-20'>
                    <img src={introCubes} />
                </div>
                <div className='hidden md:block absolute bottom-0 right-20'>
                    <img src={introPillar} />
                </div>
            </div>
            <Footer theme={'dark'} />
            <Payments/>
        </>
    )
}

export default Hero