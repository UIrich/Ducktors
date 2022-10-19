import ResetPass from '../components/Login/ResetPassword.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function ResetPassword() {
    return (
    <div className="ResetPassword">
    <ChakraProvider>
        <ResetPass/>
    </ChakraProvider>
    </div>

    );
}

export default ResetPassword;