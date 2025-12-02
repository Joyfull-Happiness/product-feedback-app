import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Feedback from "./Pages/Feedback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
}

export default App;
