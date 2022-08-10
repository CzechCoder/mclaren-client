import axios from 'axios'

interface UserFormData {
    email: string,
    password: string
  }

const API_URL = 'http://localhost:5000/api/users/'

// logout
const logout = () => {
  localStorage.removeItem('user')
  
}

// login user
const login = async (userData: any) => {
    const response = await axios.post(API_URL + 'login', userData);
  
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  };

  const authService = {
    logout,
    login
  };

  export default authService;
