import React from 'react'
import rays from './../assets/investing/Vector.svg'
import floor from './../assets/investing/Group.svg'
import stockPhone from './../assets/investing/investing-stocks.svg'
import bitcoinPhone from './../assets/investing/investing-bitcoin.svg'
import graph1 from './../assets/investing/investing-graph-1.svg'
import graph2 from './../assets/investing/investing-graph-2.svg'
import graph3 from './../assets/investing/investing-graph-3 1.svg'
import Footer from './Footer'

const Investing = () => {
    return (
        <div className='investing w-screen h-screen relative overflow-hidden' style={{ backgroundColor: '#00D54B' }}>
            {/* <img src={rays} className='absolute h-full' /> */}
            <img src={floor} className='absolute w-full bottom-0 bg-white' style={{ zIndex: 0 }} />
            <p className='font-bold text-4xl pt-4 text-white m-auto'>Investing</p>
            <div className='absolute flex flex-wrap md:no-wrap justify-around content-center w-full mt-10' style={{ zIndex: 2 }}>
                <div className='self-center'>
                    <p className='sm:text-left font-bold text-4xl'>Stocks</p>
                    <p className='sm:text-left text-sm max-w-sm'>
                        Whether you’re an expert or just getting started, Cash App is the fastest and most accessible way to invest in stocks. Start now with as little as $1.
                    </p>
                </div>
                <div className='content-center block'>
                    <img src={stockPhone} className='inline-block' />
                    <img src={bitcoinPhone} className='inline-block' />
                </div>
                <div className='self-center'>
                    <p className='sm:text-left font-bold text-4xl'>Bitcoin</p>
                    <p className='sm:text-left text-sm max-w-sm'>
                        Cash App is the fastest way to convert dollars to bitcoin. From your home screen, six taps are all it takes to stack sats, buy an entire bitcoin, or just see what it’s all about.
                    </p>
                </div>
            </div>
            <img src={graph1} className='hidden lg:block absolute bottom-16' />
            <img src={graph2} className='hidden lg:block absolute right-0' />
            <img src={graph3} className='hidden lg:block absolute right-0 bottom-16' />
            <Footer theme={'light'} />
        </div>
    )
}

export default Investing