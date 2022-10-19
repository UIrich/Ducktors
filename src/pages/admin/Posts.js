import Sidebar from '../../components/Navbar/Sidebar.tsx'
import PostPanel from '../../components/Dashboard/PostPanel.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Posts() {
    return (
    <div className="Posts">
    <ChakraProvider>
        <Sidebar/>
        <PostPanel/>
    </ChakraProvider>
    </div>

    );
}

export default Posts;