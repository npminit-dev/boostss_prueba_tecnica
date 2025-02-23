import LinkToProds from "./LinkToProds";
import MainImage from "./MainImage";
import Presentation from "./Presentation";
import Reviews from "./Reviews";
import Title from "./Title";

const Home = () => {

  return ( 
    <section className="z-0 section_box w-full py-4">
      <div className="h-full w-full md:hidden flex flex-col items-center justify-around">
        <Title/>
        <MainImage/>
        <Presentation/>
        <LinkToProds/>
        <Reviews/>
      </div>
      <div className="h-full w-full md:flex hidden flex-col items-center justify-around">
        <div className="h-fit w-full flex flex-row items-center justify-around">
          <div className="h-[350px] w-fit flex flex-col items-center justify-around">
            <Title/>
            <Presentation/>
            <LinkToProds/>
          </div>
          <MainImage/>
        </div>
        <Reviews/>
      </div>
    </section>
  );
}
 
export default Home;