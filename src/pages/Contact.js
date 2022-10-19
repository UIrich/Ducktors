import ContactCard from '../components/Contact/Contact.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Contact() {
    return (
    <div className="Contact">
    <ChakraProvider>
        <ContactCard/>
    </ChakraProvider>
    </div>

    );
}

export default Contact;