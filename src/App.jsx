import "./App.css";
import {Box} from '@mui/material'
import Contact from "./Components/Contact";
import ContactList from "./Components/ContactList";

function App() {
  return (
    <Box className="App" role="main" m={5}>
      <Contact/>
      <ContactList/>
    </Box>
  );
}

export default App;
