import Sidebar from '../../components/Navbar/Sidebar.tsx'
import UserPanel from '../../components/Dashboard/UserPanel.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function Users() {
    return (
    <div className="Users">
    <ChakraProvider>
        <Sidebar/>
        <UserPanel/>
    </ChakraProvider>
    </div>
    );
}

export default Users;