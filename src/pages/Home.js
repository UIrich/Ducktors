import Navbar from '../components/Navbar/Navbar.tsx';
import Footer from '../components/Section/Footer.tsx';
import Article from '../components/Section/Article.tsx';
import Carousel from '../components/Carousel/Carousel.tsx';
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