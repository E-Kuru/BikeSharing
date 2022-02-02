import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import BikeDescription from "./pages/Annonce";
import Annonce from "./pages/Annonce";
import ConfirmationBorrower from "./pages/ConfirmationBorrower";
import ConfirmationUser from "./pages/ConfirmationUser";
import CreateAnnonce from "./pages/CreateAnnonce";
import SignUp from "./pages/SignUp";
import Paiement from "./pages/Paiement";
import Profil from "./pages/Profil";
import Admin from "./pages/Admin"
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/annonce" element={<Annonce/>} />
      <Route path="/profil" element={<Profil/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>

    
  )
}

export default App;

