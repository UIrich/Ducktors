import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.tsx';
import PrivacyContainer from '../components/Footer/Privacy.tsx';
import Carousel from '../components/Carousel/Carousel.tsx';
import { ChakraProvider } from "@chakra-ui/react";

function Privacy() {
    return (
        <ChakraProvider>
        <Navbar/>
        <Carousel/>
        <PrivacyContainer/>
        <Footer/>
        </ChakraProvider>

    );
}

export default Privacy;