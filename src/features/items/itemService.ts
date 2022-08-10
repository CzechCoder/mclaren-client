import axios from "axios";

const API_URL = "/api/items/";

// add new item
const addItem = async (itemData: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, itemData, config);

  return response.data;
};

// get items
const getItems = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const itemService = {
  addItem,
  getItems,
};

export default itemService;
