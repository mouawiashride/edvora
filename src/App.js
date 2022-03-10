import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Main from './component/Main/Main';
import Ridescontextprovider from './ridescontext/Ridescontextprovider';
function App() {
  return (
  
      <Ridescontextprovider>
      <Router>
    <Main/>
    </Router>
     </Ridescontextprovider>

  );
}

export default App;
