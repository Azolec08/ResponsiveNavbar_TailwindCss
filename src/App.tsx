import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./RootLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
