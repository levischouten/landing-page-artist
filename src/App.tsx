import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import styled from "styled-components";
import Figure from "./components/Figure";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 90vw;
  max-width: 1200px;
  margin-inline: auto;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header></Header>
      <Main>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Main>
      <Footer></Footer>
    </AppWrapper>
  );
};

export default App;
