import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
// import BikeDescription from "./pages/Annonce";
import BikePage from "./pages/BikePage";
import ConfirmationBorrower from "./pages/ConfirmationBorrower";
import ConfirmationUser from "./pages/ConfirmationUser";
import CreateAnnonce from "./pages/CreateAnnonce";
import Paiement from "./pages/Paiement";
import Profil from "./pages/Profil";
import Admin from "./pages/Admin"
import NotFound from "./pages/NotFound";
import Modals from "./components/Modals";
import { ModalProvider } from "./context/Modal";
import './style/fonts.css'

const App = () => {
  return (
    <BrowserRouter>
    <ModalProvider>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/bikePage" element={<BikePage/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Modals />
    </ModalProvider>
    </BrowserRouter>

    
  )
}

export default App;

