import Navbar from "../components/Navbar"
// import BikeCard from "../components/BikeCard"
// import Footer from "../components/Footer/Footer"
// import Categorie from "../components/Catégorie/Categorie"
// import Main from "../components/Qui-sommes-nous/Main"
import Calendrier from "../components/Calendrier/Calendrier"
import DateTime from "../components/Calendrier/DateTime"
import CategoriesCard from "../components/CategoriesCard"
import Qsm from "../components/Qsm"
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Calendrier />
            <DateTime />
            <CategoriesCard/>
            <Qsm/>
            <Footer/>
            {/* <BikeCard></BikeCard> */}
            {/* <Categorie/>
            <Main/>
            <Footer/> */}
        </div>
    )
}
export default Home