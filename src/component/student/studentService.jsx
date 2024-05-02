
// services/CommuniqueService.js
import instance from "../../common/axios";

const BASE_URL = 'api/v1/student';

const CommuniqueService = {
  registerStudent: async (schoolID) => {
    try {
      const response = await instance.get(`/${BASE_URL}/communications`);
      return response.data;
    } catch (error) {
      console.error('Error fetching all communiques:', error);
      throw error;
    }
  },

  getCommuniqueById: async (communiqueID) => {
    try {
      const response = await instance.get(`${BASE_URL}/${communiqueID}/communique`);
      console.log(response.data)
      return response.data;
      
    } catch (error) {
      console.error(`Error fetching communique with ID ${communiqueID}:`, error);
      throw error;
    }
  },

  createCommunique: async (communiqueData , schoolID) => {
    try {
      const response = await instance.post(`${BASE_URL}/${schoolID}/newCommunique/`, communiqueData);
      return response.data;
    } catch (error) {
      console.error('Error creating communique:', error);
      throw error;
    }
  },

  updateCommunique: async ( communiqueData , communiqueID) => {
    try {
      const response = await instance.put(`${BASE_URL}/${communiqueID}/update-communique` , communiqueData);
      return response.data;
    } catch (error) {
      console.error(`Error updating communique with ID ${communiqueID}:`, error);
      throw error;
    }
  },

  deleteCommunique: async (communiqueID) => {
    try {
      const response = await instance.delete(`${BASE_URL}/${communiqueID}/delete-communique`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting communique with ID ${communiqueID}:`, error);
      throw error;
    }
  }
};

export default CommuniqueService;
