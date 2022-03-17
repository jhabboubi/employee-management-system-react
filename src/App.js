import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/employees" element={<ListEmployeeComponent />} />
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
