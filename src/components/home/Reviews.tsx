import { useEffect, useRef, useState } from "react";
import { Review } from "../../../typedefinitions";
import { v4 as uuid } from 'uuid'
import { sleep } from "../../utils.mjs";

const Reviews = () => {

  const [review, setReview] = useState<number>(0)
  const container = useRef<HTMLDivElement|null>(null)

  useEffect(() => {
    (async () => {
      await handleAnimations()
    })()
  }, [review]);

  const handleAnimations = async () => {
    if(container.current) {
      let curr = container.current.children[review % reviews.length]
      curr.classList.remove('fadeout_left_long')
      curr.classList.add('fadein_left_long')
      await sleep(5500)
      curr.classList.remove('fadein_left_long')
      curr.classList.add('fadeout_right_long')
      await sleep(500) 
      setReview(rev => rev + 1) 
    }
  }

  return (
    <div className="relative w-full h-[120px] flex items-center justify-center">
      <div ref={container} className="relative h-[150px] w-full sm:max-w-[500px] px-1 md:px-2 flex items-center justify-center font-roboto text-center text_emphasis overflow-hidden">        
        {
          reviews.map(rev => {
            return <blockquote key={uuid()} className="absolute w-full xs:w-[450px] text-sm md:text-base text-text zero_opacity">
              "{rev.content}"
              <br></br>
              <br></br>
              <cite className="font-bold text-text">
                ~ {rev.author} ~
              </cite>
            </blockquote>
          })
        } 
      </div>
    </div>
  );
}

export default Reviews;

const reviews: Review[] = [
  {
    content: "A masterclass in culinary excellence. The quality of the ingredients is unmatched, and the preparation of each dish is simply flawless. A must-visit for those who appreciate the finer things in life.",
    author: "Gordon Ramsay"
  },
  {
    content: "The variety of dishes is impressive, each one a testament to the chef's mastery of both classic and contemporary techniques. The attention to detail in every aspect is remarkable.",
    author: "Massimo Bottura"
  },
  {
    content: "A place that truly honors tradition. The classic recipes are executed with such precision and care that they transport you back to the golden age of fine dining.",
    author: "Alice Waters"
  },
  {
    content: "Where tradition meets perfection. The use of high-quality ingredients and the care in preparation make each bite a memorable experience.",
    author: "Alain Ducasse"
  },
  {
    content: "From the moment you walk in, you're treated like royalty. The personalized attention combined with the exquisite menu makes this a top-tier dining destination.",
    author: "Thomas Keller"
  },
  {
    content: "The blend of classic and contemporary is masterfully done. The ingredients are fresh, and the presentation is impeccable. A true culinary haven.",
    author: "Rene Redzepi"
  },
  {
    content: "This restaurant sets the bar for fine dining. The variety of dishes is outstanding, and each one is a perfect blend of flavors and textures. The atmosphere and service are equally exceptional.",
    author: "Heston Blumenthal"
  },
  {
    content: "An unforgettable experience. The chefs' dedication to sourcing the finest ingredients and their expert preparation shines through in every dish.",
    author: "Daniel Boulud"
  },
  {
    content: "A tribute to culinary tradition. The dishes are prepared with such skill and respect for ingredients that it feels like a celebration of food itself.",
    author: "Joël Robuchon"
  },
  {
    content: "A dining experience that is both timeless and contemporary. The classic dishes are elevated to new heights with meticulous preparation and top-quality ingredients.",
    author: "Anne-Sophie Pic"
  }
];