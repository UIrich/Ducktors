import '../App.css';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';
import Article from '../components/Article.tsx';
import Carousel from '../components/Carousel.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Home() {
    return (
    <div class="Home">
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