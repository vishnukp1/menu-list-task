import axios from 'axios';

const baseUrl = 'https://menu-list-task.onrender.com'; 


export const useGetItems = () => {
  const getItems = async () => {
    try {
      const response = await axios.get(`${baseUrl}/items`);
      return response.data.data;
    } catch (error) {
      console.error('Error getting items:', error);
      throw error;
    }
  };

  return { getItems };
};
