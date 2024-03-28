import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Homepage from "./components/Homepage";
import PageHome from "./components/PageHome";

function App() {
  // test
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/q2med" element={<Homepage />} />
        <Route path="/chatmed" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
