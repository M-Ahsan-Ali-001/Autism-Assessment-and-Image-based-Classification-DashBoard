
import './App.css';
import { CookiesProvider } from "react-cookie";
import Login from './pages/login';


function App() {
  return (
    <CookiesProvider>

<Login></Login>
  </CookiesProvider>
  );
}

export default App;
