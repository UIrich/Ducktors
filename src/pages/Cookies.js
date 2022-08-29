import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.tsx';
import CookiesContainer from '../components/Footer/Cookies.tsx';
import Carousel from '../components/Carousel/Carousel.tsx';
import { ChakraProvider } from "@chakra-ui/react";

function Cookies() {
    return (
        <ChakraProvider>
        <Navbar/>
        <Carousel/>
        <CookiesContainer/>
        <Footer/>
        </ChakraProvider>

    );
}

export default Cookies;