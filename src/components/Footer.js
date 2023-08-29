import React from 'react'
import apple from './../assets/apple.svg'
import googleplay from './../assets/googleplay.svg'
import message from './../assets/message.svg'
import twitter from './../assets/twitter.svg'
import instagram from './../assets/instagram.png'
import downArrow from './../assets/down_arrow.svg'

const styleForDark = {
    color: '#ffffff',
    zIndex: 1
}
const styleForLight = {
    color: '#000000',
    zIndex: 1
}

//props = theme == dark : light
const Footer = (props) => {
    return (
        <div className='absolute bottom-0 flex flex-wrap items-center justify-between w-screen mt-4' style={props.theme === 'dark' ? styleForDark : styleForLight}>
            <div className='flex grow justify-center'>
                <span className={`p-2 md:p-4 border-solid border-2 rounded-md font-bold mx-4 ${props.theme === 'dark' ? 'border-white bg-black' : 'border-black'}`} >
                    <img src={apple} className='inline-block' />
                    &nbsp;
                    APP STORE
                </span>
                <span className={`p-2 md:p-4 border-solid border-2 rounded-md font-bold mx-4 ${props.theme === 'dark' ? 'border-white bg-black' : 'border-black'}`}>
                    <img src={googleplay} className='inline-block' />
                    &nbsp;
                    GOOGLE PLAY
                </span>
            </div>
            <span className='max-w-md  text-xs md:text-left p-2'>
                Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
            </span>
            <div className='flex grow justify-center'>
                <span className='mx-4'>
                    <img src={message} className={`${props.theme === 'light' ? 'invert' : ''}`} style={{ color: '#000000' }} />
                </span>
                <span className='mx-4'>
                    <img src={twitter} className={`${props.theme === 'light' ? 'invert' : ''}`} />
                </span>
                <span className='mx-4'>
                    <img src={instagram} className={`${props.theme === 'light' ? 'invert' : ''}`} />
                </span>
            </div>
            <div className='bg-black h-0.5 w-screen mt-1'></div>
        </div>
    )
}

export default Footer