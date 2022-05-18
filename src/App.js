import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar.tsx';
import Features from './components/Features.tsx';
import Footer from './components/Footer.tsx';
import Carousel from './components/Carousel.tsx';

function App() {
  return (
    <div className="App">
    <ChakraProvider>
      <Navbar />
      <Carousel/>
      <Features/>
      <Footer/>
    </ChakraProvider>
    </div>
    
  );
}

export default App;