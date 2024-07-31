import LinkToProds from "./LinkToProds";
import MainImage from "./MainImage";
import Presentation from "./Presentation";
import Title from "./Title";

const Home = () => {
  return ( 
    <section className="z-0 section_box w-full py-4">
      <div className="h-full w-full md:hidden flex flex-col items-center justify-around">
        <Title/>
        <MainImage/>
        <Presentation/>
        <LinkToProds/>
      </div>
      <div className="h-full w-full md:flex hidden flex-row items-center justify-around">
        <div className="h-[350px] flex flex-col items-center justify-around">
          <Title/>
          <Presentation/>
          <LinkToProds/>
        </div>
        <MainImage/>
      </div>
    </section>
  );
}
 
export default Home;