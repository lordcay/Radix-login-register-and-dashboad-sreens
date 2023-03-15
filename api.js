import axios from 'axios';

const BASE_URL = 'http://localhost:4000'; // replace with your API URL

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/authenticate`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
