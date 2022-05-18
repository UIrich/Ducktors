import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx'

function App() {
  return (
    <div className="App">
          <ChakraProvider>
      <Navbar />
      <Footer />
      </ChakraProvider>
    </div>
    
  );
}

export default App;