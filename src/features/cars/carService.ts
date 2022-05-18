import axios from "axios";

const API_URL = "/api/cars/";

// register new car
const registerCar = async (carData: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, carData, config);

  return response.data;
};

// get users cars
const getCars = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const carService = {
  registerCar,
  getCars,
};

export default carService;
