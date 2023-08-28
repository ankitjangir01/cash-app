import React from 'react'
import apple from './../assets/apple.svg'
import googleplay from './../assets/googleplay.svg'
import message from './../assets/message.svg'
import twitter from './../assets/twitter.svg'
import instagram from './../assets/instagram.png'
import downArrow from './../assets/down_arrow.svg'

const styleForDark = {
    color: '#ffffff',
}
const styleForLight = {

}

//props = theme == dark : light
const Footer = (props) => {
    return (
        <div className='absolute bottom-10 flex flex-wrap items-center justify-between w-screen' style={props.theme === 'dark' ? styleForDark : styleForLight}>
            <div className='flex grow justify-center'>
                <span className='p-4 border-solid border-2 rounded-md font-bold bg-black mx-4'>
                    <img src={apple} className='inline-block'/>
                    &nbsp;
                    APP STORE``
                </span>
                <span className='p-4 border-solid border-2 rounded-md font-bold bg-black mx-4'>
                    <img src={googleplay} className='inline-block'/>
                    &nbsp;
                    GOOGLE PLAY
                </span>
            </div>
            <img src={downArrow} className='hidden lg:block justify-self-center'/>
            <span className='max-w-xl  text-xs md:text-left p-2'>
                Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
            </span>
            <div className='flex grow justify-center'>
                <span className='mx-4'>
                    <img src={message} />
                </span>
                <span className='mx-4'>
                    <img src={twitter} />
                </span>
                <span className='mx-4'>
                    <img src={instagram} />
                </span>
            </div>
        </div>
    )
}

export default Footer