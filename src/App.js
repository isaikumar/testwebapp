import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import TilesAndValues from "./tilesAndValues";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Default Route when the page is loaded */}
          <Route path="/" element={<Navigate replace to="/tilesAndValues" />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/tilesAndValues" element={<TilesAndValues />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
