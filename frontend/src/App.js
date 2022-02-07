import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import BikePage from "./pages/BikePage";
import BikeDescription from "./pages/BikeDescription";
import ConfirmationBorrower from "./pages/ConfirmationBorrower";
import ConfirmationLender from "./pages/ConfirmationLender";
import Profil from "./pages/Profil";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Modals from "./components/Modals";
import { ModalProvider } from "./context/Modal";
import Annonce from "./pages/BikePage";
import "./style/fonts.css";
import { UserProvider } from "./context/User";
import CreateAnnoce from "./components/profil/CreateAnnonce";
 

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <ModalProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/bikeDescription/:id" element={<BikeDescription/>} />
            <Route exact path="/profil" element={<Profil />} />
            <Route path="/bikePage/:categorie" element={<BikePage />} />
            <Route path="/location-borrower/:id" element={<ConfirmationBorrower />} />
            <Route path="/location-lender/:id" element={<ConfirmationLender />} />
            <Route path="/BikeDescription" element={<BikeDescription />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
          <Modals />
        </ModalProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
