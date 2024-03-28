import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/q2med" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
