import { useEffect, useState } from "react";
import Axios from "../api-config/axiosConfig";

export const useGetFilteredItems = () => {
  const [drinks, setDrinks] = useState([]);
  const [brunchCocktails, setBrunchCocktails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
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
      }
    };

    fetchItems();
  }, []);

  return { drinks, brunchCocktails, error };
};
