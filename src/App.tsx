import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div>Works</div>}></Route>
        <Route path="about" element={<div>About</div>}></Route>
        <Route path="contact" element={<div>Contact</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
