import Sidebar from '../../components/Navbar/Sidebar.tsx'
import UserPanel from '../../components/Dashboard/UserPanel.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Users() {
    return (
    <div class="Users">
    <ChakraProvider>
        <Sidebar/>
    </ChakraProvider>
    </div>

    );
}

export default Users;