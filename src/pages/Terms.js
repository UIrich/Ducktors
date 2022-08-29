import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.tsx';
import TermsContainer from '../components/Footer/Terms.tsx';
import Carousel from '../components/Carousel/Carousel.tsx';
import { ChakraProvider } from "@chakra-ui/react";

function Terms() {
    return (
        <ChakraProvider>
        <Navbar/>
        <Carousel/>
        <TermsContainer/>
        <Footer/>
        </ChakraProvider>

    );
}

export default Terms;