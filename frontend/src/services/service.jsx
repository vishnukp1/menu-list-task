import { useEffect, useState, useContext } from "react";
import Axios from "../api-config/axiosConfig";
import { LoaderContext } from "../common/loader/LoaderMiddelware";



export const useGetFilteredItems = () => {
  const [drinks, setDrinks] = useState([]);
  const [brunchCocktails, setBrunchCocktails] = useState([]);
  const [error, setError] = useState(null);
  const { setLoading } = useContext(LoaderContext);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await Axios.get(`/api/items`);
        const data = response.data.data;

        const filteredDrinks = data.filter(item => item.category === 'DRINKS');
        const filteredBrunchCocktails = data.filter(item => item.category === 'BRUNCH COCKTAILS');

        setDrinks(filteredDrinks);
        setBrunchCocktails(filteredBrunchCocktails);
      } catch (error) {
        console.error("Error getting items:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [setLoading]);

  return { drinks, brunchCocktails, error };
};

