import "./App.css";
// import Head from './components/Sidebar/Head';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Territories from "../src/pages/Territories";
import Dashboard from "../src/pages/Dashboard";


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/territories" element={<Territories />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>



    </>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
