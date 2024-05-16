import { useEffect, useState } from "react";
import {
    BACK_GROUND,
    COCKTAIL_ONE,
    COCKTAIL_TWO,
    CUP,
    JAR,
    LEFT_BG_IMAGE,
    RECTANGLE_BG,
    RECTANGLE_PLANTS,
    RIGHT_BG_IMAGE,
  } from "../../assets";
  import Button from "../../components/Button";
import { useGetItems } from "../../services/service";
  import FlavorCard from "./components/FloverCard";
  import MenuCard from "./components/MenuCard";
  import ThreeColumnText from "./components/ThreeColumnText";
import { data } from "autoprefixer";
  
  function FoodPage() {
   
    const { getItems } = useGetItems();
    const [getItem, setGetItem] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [brunchCocktails, setBrunchCocktails] = useState([]);
  
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const data = await getItems(); 
          setGetItem(data);
  
       
          const filteredDrinks = data.filter(item => item.category === 'Drinks');
          const filteredBrunchCocktails = data.filter(item => item.category === 'Brunch Cocktails');
  
          setDrinks(filteredDrinks);
          setBrunchCocktails(filteredBrunchCocktails);
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      };
  
      fetchItems();
    }, []);

    const topLengths_drinks = {
      sm: '10px',
      md: '10px',
      lg: '10px', 
    };
    
    const topLengths_brunch = {
      sm: '850px',
      md: '130px',
      lg: '1200px', 
    };
  

    return (
      <>
        <div className="  flex flex-col items-center justify-center  text-center ">
          <div className="relative w-full h-[311px] ">
            <img
              src={RECTANGLE_PLANTS}
              alt="Background"
              className="w-full h-full object-cover object-center "
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center h-full">
              <div className="text-center mb-2 ">
                <h2
                  className="text-white font-bold md:text-5xl lg:text-6xl"
                  style={{ textShadow: "4px 3px #800020" }}
                >
                  MENU
                </h2>
              </div>
              <div className="text-center px-4 md:w-3/4 lg:w-2/3">
                <p
                  className="text-gray-400 md:inline md:block"
                  style={{ fontFamily: "Kelly Slab, sans-serif" }}
                >
                  Please take a look at our menu featuring food, drinks, and
                  brunch. If you'd like to
                  <br className="2xl:hidden" />
                  place an order, use the "Order Online" button located below the
                  menu.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[79px] overflow-hidden">
            <img
              src={RECTANGLE_BG}
              alt="Background"
              className="w-full object-cover h-full object-center sm:object-left z-10"
            />
            <div className="absolute top-[5px] w-full flex justify-center items-center  z-10">
              <Button className="text-white w-[113px] h-[50px]  hover:bg-[#0796EF] ">
                FOOD
              </Button>
              <Button className="text-white  w-[113px] h-[50px]  hover:bg-[#0796EF] ">
                DRINKS
              </Button>
              <Button className="text-white  w-[113px] h-[50px]  hover:bg-[#0796EF] ">
                BRUNCH
              </Button>
            </div>
          </div>
        </div>
        <div
           className="pb-[70px] pt-[86px] "
           style={{ backgroundImage: `url(${BACK_GROUND})` }}
        >
        <div
       
        >
          <div className="relative">
            {/* Left background image */}
            <img
              src={LEFT_BG_IMAGE}
              alt="Left Background"
              className="absolute top-0 right-[-32px]h-full z-[1] object-cover"
            />
            {/* Right background image */}
            <img
              src={RIGHT_BG_IMAGE}
              alt="Right Background"
              className="absolute top-0 right-[-32px] h-full z-[1] object-cover"
            />
            {/* Rest of your content */}
            <MenuCard image1={JAR} image2={CUP} topLengths={topLengths_drinks} data={drinks}/>
            <MenuCard image2={COCKTAIL_ONE} image1={COCKTAIL_TWO} topLengths={topLengths_brunch} data={brunchCocktails}/>
            <FlavorCard />
  
            <div className="flex mb-[80px] mt-[-50px] justify-center">
              <button
                className="w-40 h-12  rounded border border-gray-300 bg-blue-500"
             
              >
                ORDER ONLINE
              </button>
             
            </div>
            <ThreeColumnText />
          </div>
          </div>
        </div>
      </>
    );
  }
  
  export default FoodPage;
  