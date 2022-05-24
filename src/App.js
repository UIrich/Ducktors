import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Article from './components/Article.tsx';
import Carousel from './components/Carousel.tsx';

function App() {
  return (
    <div className="App">
    <ChakraProvider>
      <Navbar />
      <Carousel/>
      <Article/>
      <Footer/>
    </ChakraProvider>
    </div>
    
  );
}

export default App;