import Axios from "../api-config/axiosConfig";

export const useGetItems = () => {
  const getItems = async () => {
    try {
      const response = await Axios.get(`/api/items`);
      return response.data.data;
    } catch (error) {
      console.error("Error getting items:", error);
      throw error;
    }
  };

  return { getItems };
};
