import React from 'react'

const Footer = () => {
    return (
        <footer>


            <div className='bg-black  bottom-0 w-full h-20 flex justify-between'>
                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-800'><sup>**</sup></span>Pass
                    <span className='text-violet-500'>
                        Handle
                    </span>
                    <span className='text-green-800'><sup>**</sup></span>
                </div>
                < div className='text-white flex justify-between items-center rounded-2xl my-5 gap-2'>
                    I am Suryansh. Please Visit My github
                    <img className='invert p-1 w-8 ' src="icons/github.svg" alt="" />
                </div>
                <div className='text-white font-bold  pt-4 mr-5'>
                    Thankyou For Visiting....
                </div>
            
            </div>
        </footer>
    )
}

export default Footer
