import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./RootLayout";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
