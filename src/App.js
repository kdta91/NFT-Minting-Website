import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/website/Home";
import Install from "./components/minting/Install";
import MintHome from "./components/minting/Home";

function App() {
  if (window.ethereum) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<MintHome />} />
        </Routes>
      </Router>
    );
  } else {
    return <Install />;
  }
}

export default App;
