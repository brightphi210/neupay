import flag from './assets/flag.png'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Input,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useState } from 'react'

export const Forms = ({isOpen, onClose} : any) => {
  
  const toast = useToast()

  const [firstName, setFistName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const handleFirstName = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFistName(e.target.value)
  }

  const handleLastName = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setLastName(e.target.value)
  }

  const handleEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }

  const handlePhone = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setPhone(e.target.value)
  }
  
  const url = 'https://dev.neupay.co/api/v1/waitlist/'

  const handleSubmit = async (e:any) =>{
    setIsLoading(true)
    e.preventDefault()
    try {
      const response = await fetch(url, {
        method : 'POST',
        body : JSON.stringify({
          first_name:firstName, 
          last_name:lastName, 
          email:email, 
          phone:phone
        }),
        headers : {
          'Content-Type' : 'application/json'
        }
      })

      console.log('This is the response!!', response);
      if(response.status === 201 || response.ok){
        setIsLoading(false)
        console.log('Waitlist successfully added!!');
        onClose()
        toast({
          title: 'Data submitted successfully',
          status: 'success',
          isClosable: true,
          position: 'top',
        });
      }

      else {
        setIsLoading(false)
        const data = await response.json();
        if (data.email) setEmailError(data.email[0]);
        if (data.phone) setPhoneError(data.phone[0]);


        setTimeout(() => {
          setEmailError('');
        }, 5000);
      
        setTimeout(() => {
          setPhoneError('');
        }, 5000);
      }
      
    } catch (error) {
      setIsLoading(false)
      console.log('An error occurred!!');
      
    }
  }

  return (
    <div>
      <Modal isCentered isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' size={'xl'}>
        <ModalOverlay/> 
        <ModalContent maxW={{ base: '95vw', md: '600px' }}>
          <ModalCloseButton />

          <form className="p-5 " onSubmit={handleSubmit}>
            <h2 className="text-xl text-center font-bold">Join the Waitlist</h2>
            <p className="py-3 text-center text-sm">Help us reach out to you when we launch</p>

            <div className="pt-5">
              <p className="text-sm pb-2">First Name: </p>
              <Input 
                placeholder='e.g John' 
                type="text" required
                onChange={handleFirstName}
                value={firstName}
              />
            </div>


            <div className="pt-5">
              <p className="text-sm pb-2">Last Name: </p>
              <Input 
                placeholder='e.g Emeka' 
                type="text" required
                onChange={handleLastName}
                value={lastName}
              />
            </div>


            <div className="pt-5">
              <p className="text-sm pb-2">Email Address: </p>
              <Input 
                placeholder='joe123@gmail.com' 
                type="email" required
                onChange={handleEmail}
                value={email}
              />

                {emailError &&
                  <p className='text-red-500 pt-3 text-sm'>{emailError}</p>
                }
            </div>

            <div className="pt-5">
              <p className="text-sm pb-2">Phone Number: </p>

              <div className='relative'>
                <img src={flag} alt="" className='absolute left-2 top-3 h-5 w-5 rounded-sm '/>
                <Input
                  placeholder="e.g 09195462827"
                  paddingLeft={8}
                  value={phone}
                  onChange={handlePhone}
                  type='number'
                />
                {phoneError &&
                  <p className='text-red-500 pt-3 text-sm'>{phoneError}</p>
                }
              </div>
            </div>

              {isLoading === false ?
                <button type="submit" className="text-white lg:w-ft w-full bg-[#1552A7] rounded-lg px-10 py-3 text-sm mt-10">Submit</button> :
                <button type="submit" disabled={true} className="text-white m-auto justify-center items-center lg:w-ft w-full bg-[#1552A7] rounded-lg px-10 py-3 text-sm mt-10 flex gap-3">
                  Submit <span className="loader"></span>
                </button>
              }
          </form>
        </ModalContent>
      </Modal>
    </div>
  )
}


export const Button = ({onOpen} : any) =>{
    return (
        <button onClick={() => {
          onOpen()
        }} className='bg-[#1552A7] px-10 text-sm py-3 rounded-full text-white'>Join The Waitlist</button>
    )
}