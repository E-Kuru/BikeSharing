import Navbar from "../components/Navbar"
import BikeCard from "../components/BikeCard"
import Footer from "../components/Footer/Footer"
import Categorie from "../components/Catégorie/Categorie"
import Main from "../components/Qui-sommes-nous/Main"
import Calendrier from "../components/Calendrier/Calendrier"
import DateTime from "../components/Calendrier/DateTime"

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Calendrier />
            <DateTime />
            {/* <BikeCard></BikeCard> */}
            <Categorie/>
            <Main/>
            <Footer/>
        </div>
    )
}
export default Home