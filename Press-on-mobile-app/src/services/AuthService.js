import axios from 'axios';

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await axios.post('https://your-api-url/login', { email, password });
      return response.data;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials and try again.');
    }
  },
  
  logout: async () => {
    try {
      await axios.post('https://your-api-url/logout');
    } catch (error) {
      throw new Error('Logout failed. Please try again.');
    }
  },
  
  getUserDetails: async () => {
    try {
      const response = await axios.get('https://your-api-url/user');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch user details. Please try again.');
    }
  },
  
  updateUserDetails: async (userData) => {
    try {
      const response = await axios.put('https://your-api-url/user', userData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update user details. Please try again.');
    }
  },
  
  changePassword: async (currentPassword, newPassword) => {
    try {
      const response = await axios.put('https://your-api-url/user/password', { currentPassword, newPassword });
      return response.data;
    } catch (error) {
      throw new Error('Failed to change password. Please try again.');
    }
  }
};

export default AuthService;