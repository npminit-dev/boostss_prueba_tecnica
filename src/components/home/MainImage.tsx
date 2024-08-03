const MainImage = () => {
  return ( 
    <div className="relative md:w-fit">
      <div className="h-fit w-fit mx-auto border-white border-2 rounded-full overflow-hidden fadein_down_long">
        <div className="h-[225px] w-[225px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px] flex items-center justify-center duration-500 cursor-pointer group">
          <img 
            src="/home_photo.webp" 
            className="scale-110 grayscale-[30%] group-hover:scale-100 group-hover:grayscale-0 duration-500 h-[225px] w-[225px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px]"
            title="Chef preparing a classic Italian pizza with cherry tomatoes and basil" 
            alt="Chef preparing a classic Italian pizza with cherry tomatoes and basil"
          />
        </div>
      </div>
    </div>
  );
}
 
export default MainImage;