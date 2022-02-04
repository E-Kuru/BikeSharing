import Navbar from "../components/Navbar";
import Calendrier from "../components/Calendrier/Calendrier";
import DateTime from "../components/Calendrier/DateTime"
import CategoriesCard from "../components/CategoriesCard";
import Qsm from "../components/Qsm";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Calendrier />
      <CategoriesCard />
      <Qsm />
      <Footer />
    </div>
  );
};
export default Home;
