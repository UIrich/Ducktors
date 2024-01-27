import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.tsx';
import Article from '../components/Section/Section.jsx';
import Carousel from '../components/Carousel/Carousel.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Home() {
    return (
    <div className="Home">
    <ChakraProvider>
      <Navbar />
      <Carousel/>
      <Article/>
      <Footer/>
    </ChakraProvider>
    </div>

    );
}

export default Home;