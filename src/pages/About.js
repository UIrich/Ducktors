
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.tsx';
import AboutContainer from '../components/Footer/About.tsx';
import Carousel from '../components/Carousel/Carousel.tsx';
import { ChakraProvider } from "@chakra-ui/react";

function About() {
    return (
        <ChakraProvider>
        <Navbar/>
        <Carousel/>
        <AboutContainer/>
        <Footer/>
        </ChakraProvider>

    );
}

export default About;