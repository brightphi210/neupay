import Home from './Home'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <div>
      <ChakraProvider>
      <Home />
      </ChakraProvider>
    </div>
  )
}

export default App
