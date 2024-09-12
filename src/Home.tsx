import logo from './assets/logo.png'
import logo2 from './assets/logo2.png'
// import brand1 from './assets/brand1.png'
// import brand2 from './assets/brand2.png'
import phone from './assets/phone.png'
import phone2 from './assets/phone2.png'
import phone3 from './assets/phone3.png'
import phone4 from './assets/phone4.png'
import phone5 from './assets/key.png'

import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";



import { useState } from 'react'
import { Button, Forms } from './Components'

import {
  useDisclosure,
} from '@chakra-ui/react'


const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isActive1, setIsActive1] = useState<boolean>(true)
  const [isActive2, setIsActive2] = useState<boolean>(false)

  const handleClick1 = () => {
    setIsActive1(true)
    setIsActive2(false)
  }


  const handleClick2 = () => {
    setIsActive1(false)
    setIsActive2(true)
  }
  return (
    <div>
      <nav className='flex items-center 2xl:px-[10rem] xl:px-[5rem] lg:px-[5rem] z-40 px-5 lg:py-5 py-3 fixed w-full bg-white backdrop-filter backdrop-blur-3xl bg-opacity-80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
        <div className='w-40'>
            <img src={logo} alt="" />
        </div>
        <button onClick={() => {
          onOpen()
        }} className='bg-[#1552A7] text-white ml-auto p-3 px-6 rounded-full text-sm'>Join Waitlist</button>
      </nav>

      <section className='lg:pt-48 pt-40 flex justify-center lg:px-0 px-5'>
        <div className='text-center'>
          <h2 className='lg:text-[80px] text-[34px] lg:leading-[72px] leading-[40px] font-semibold'>Stay 
            <span className='text-[#1552A7] italic'> safe</span> from online <br className=' lg:block hidden'/> payment scams </h2>
          <p className='py-10 lg:text-lg text-sm'>
            …we're taking away the worries and fears of buying and selling to <br className='lg:block hidden'/> 
            strangers. And we guarantee that what you pay for is exactly what you get. 
          </p>
          <button onClick={() => {
          onOpen()}} className='bg-[#1552A7] lg:px-20 px-10 lg:text-lg text-sm py-3 rounded-full text-white'>Join The Waitlist</button>


          {/* <div className='pt-10 pb-5'>
            <p>As featured in:</p>
            <div className='flex items-center pt-5 gap-3 m-auto justify-center'>
              <img src={brand1} alt="" />
              <img src={brand2} alt="" />
            </div>
          </div> */}

          <div className='flex w-full m-auto justify-center mt-10'>
            <img src={phone} alt="" className='lg:w-[60%] w-full'/>
          </div>
        </div>
      </section>

      <section className='2xl:px-[10rem] xl:px-[5rem] lg:px-[5rem] px-5 lg:py-28 py-14'>
        <div className='flex items-center lg:gap-5 gap-1 justify-center lg:mb-16 mb-5 bg-blue-100 rounded-full lg:w-fit w-full m-auto p-3 py-2 lg:px-5 px-3'>
          <button onClick={handleClick1} className={isActive1 === true ? 'bg-[#1552A7] lg:px-5 px-2 lg:text-sm text-xs py-3 lg:w-fit w-full rounded-full text-white' : 'lg:px-0 px-1 lg:w-fit w-full lg:text-sm text-xs py-3'}>For Businesses (Sellers)</button>
          <button onClick={handleClick2} className={isActive2 === true ? 'bg-[#1552A7] lg:px-5 px-2 lg:text-sm text-xs py-3 lg:w-fit w-full rounded-full text-white' : 'lg:px-0 px-1 lg:w-fit w-full lg:text-sm text-xs py-3'}>For Buyers</button>
        </div>

          {isActive1 === true &&
              <div className='flex lg:flex-row flex-col items-center lg:gap-10 gap-4'>
                <div className='w-full'>
                  <div className='mb-10'>
                    <img src={phone5} alt="" />
                  </div>
                  <h2 className='2xl:text-[60px] xl:text-[40px] lg:tex-[40px] text-[30px] 2xl:leading-[65px] lg:leading-[45px] leading-[45px]'> 
                    <span className='italic text-[#1552A7]'>Protect</span> your business and <span className='italic text-[#1552A7]'>secure</span> your sales...</h2>
                  <p className='text-sm py-5'>
                    Whether you’re a selling product <span className='font-semibold'>(ecommerce vendor, digital product sellers, B2B Vendors etc) 
                    OR services (freelancers, service providers, etc)</span> online, ensuring 
                    you get paid securely and on time is crucial.
                  </p>
                  <Button onOpen={onOpen}/>
                </div>

                <div className='w-full'>
                  <img className='w-full' src={phone3} alt="" />
                </div>
              </div>
          }

          {isActive2 && 
            <div className='flex lg:flex-row flex-col items-center lg:gap-10 gap-4'>
              <div className='w-full'>

                <div className='mb-10'>
                  <img src={phone5} alt="" />
                </div>


                <h2 className='2xl:text-[60px] xl:text-[40px] lg:tex-[40px] text-[30px] 2xl:leading-[65px] lg:leading-[45px]'> 
                  <span className='italic text-[#1552A7]'>Securely</span> pay for anything online without being scammed
                </h2>
                <p className='text-sm py-5'>
                    With Neupay, your payment is securely held and released only when 
                    you’re satisfied, protecting you from payment scams. This ensures 
                    you get what you pay for, and making online shopping safe, transparent, 
                    and stress-free for you.
                </p>
                <Button onOpen={onOpen}/>
              </div>

              <div className='w-full'>
                <img className='w-full' src={phone4} alt="" />
              </div>
            </div>
          }
      </section>

      <section className='bg-[#F7FAFE] lg:p-20 2xl:px-[10rem] xl:px-[5rem] lg:px-[5rem] px-3 py-10'>
        <div className='flex lg:flex-row flex-col items-center 2xl:p-24 xl:p-10 lg:p-5 px-5 pt-10 bg-white lg:h-[28rem] h-[45rem] rounded-2xl relative overflow-hidden'>
          <div className=''>
            <h2 className='2xl:text-[45px] xl:text-[40px] lg:text-[40px] text-[30px] 2xl:leading-[50px] lg:leading-[45px] font-bold pb-5'><span className='text-[#1552A7] italic'>Protect</span> yourself from <br className='lg:block hidden'/> payment scams</h2>
            <p className='text-sm lg:w-[95%]'><span className='font-semibold'>— around 14million people</span> in Africa have faced losses from unprotected payments this year alone.</p>
            <p className='py-5 text-sm lg:w-[95%]'>
              Whether you’re purchasing a product from a new seller, booking a service online, 
              or engaging in a high-value transaction, protecting your hard-earned money is our top priority.
            </p>
            <Button onOpen={onOpen}/>
          </div>

          <div className='w-full '>
            <img className='w-[30%] lg:block hidden absolute top-10 2xl:right-20 xl:right-10 lg:right-0' src={phone2} alt="" />
            <img className='w-full md:w-[50%] lg:hidden absolute block bottom-[-27rem] md:bottom-[-25rem]' src={phone2} alt="" />
          </div>
        </div>
      </section>

      <footer className='bg-[#1552A7] 2xl:px-[10rem] text-white text-sm xl:px-[5rem] lg:px-[5rem] py-16 px-5'>
        <div className='flex lg:flex-row gap-10 flex-col items-start justify-between '>
          <div className='w-32'>
            <img src={logo2} alt="" />
          </div>

          <div>
            <p className='text-lg'>Help & Support:  hello@neupay.co</p>
          </div>


          <div>
            <div className='flex items-center gap-5 pb-5 ml-auto lg:justify-end text-xl'>
              <p><FaLinkedinIn /></p>
              <p><FaXTwitter /></p>
              <p><FaFacebookSquare /></p>
              <p><IoLogoInstagram /></p>
            </div>
            <p className='lg:text-right'>
              789 Trans Amadi, Opp . Amadi Gardens Plot 197 <br />
              Port-Harcourt, Rivers State <br /> 
              [This is just a placeholder for Neupay’s Physical Address]
            </p>
          </div>
        </div>

        <p className='lg:text-center text-sm pt-14'>Copyright ©️ Neupay Technologies LTD. All Rights Reserved</p>
      </footer>

      <Forms isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    </div>
  )
}

export default Home
