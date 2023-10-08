import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import Gallery from "../../Components/Gallery/Gallery";
import Schedules from "../../Components/Schedules/Schedules";
import Join from "../../Components/join/join";

const Home = () => {
  return (
    <div className="">
        <Banner></Banner>
        <Cards></Cards>
        <Gallery></Gallery>
        <Schedules></Schedules>
        <Join></Join>
      </div>
  );
};

export default Home;
