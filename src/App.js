import Profile from './components/Profile.js';
import Sidebar from './components/Sidebar.js';
import RightBar from './components/RightBar.js';
import './App.css';
import { 
  ChakraProvider,
  Box,
  Stack
} from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
        <Stack direction='row' spacing='100'>
            <Sidebar />
            <Box>
            <Profile />
            </Box>
            <RightBar />
        </Stack>
    </ChakraProvider>
  );
}

export default App;