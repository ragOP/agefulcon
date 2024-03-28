import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Homepage from "./components/Homepage";

function App() {
  // test
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/q2med" element={<Homepage />} />
        <Route path="/chatmed" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
