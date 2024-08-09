import { Navigate, Route, Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
        <Route path="/" element={<>Search Page</>} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
