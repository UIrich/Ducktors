import './App.css';import { ChakraProvider } from '@chakra-ui/react'
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <AppRoutes />
      </ChakraProvider>
    </div>
    
  );
}

export default App;