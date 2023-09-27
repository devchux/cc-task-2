import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/layout";
import Home from "./components/pages/home";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
}

export default App;
