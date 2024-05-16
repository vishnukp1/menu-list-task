import axios from 'axios';

const baseUrl = 'http://localhost:3000/api'; // Replace with your actual API base URL


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
