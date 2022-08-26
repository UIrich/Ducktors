import ContactCard from '../components/Contact/Contact.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Contact() {
    return (
    <div class="Contact">
    <ChakraProvider>
        <ContactCard/>
    </ChakraProvider>
    </div>

    );
}

export default Contact;