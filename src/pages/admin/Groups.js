import Sidebar from '../../components/Navbar/Sidebar.tsx';
import GroupPanel from '../../components/Dashboard/GroupPanel.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function Dashboard() {
    return (
    <div className="Dashboard">
    <ChakraProvider>
        <Sidebar/>
        <GroupPanel/>
    </ChakraProvider>
    </div>

    );
}

export default Dashboard;