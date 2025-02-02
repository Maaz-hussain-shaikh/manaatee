import axios from "axios";
const API_BASE_URL = "https://manaatee.cyberelite.work/manaatee/Api"; 
const Token="OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4"


export const fetchuser = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Users/all_user`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchpost = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/post/fetch_post`, {
        headers: {
          Authorization: `Bearer ${Token}`, 
        },
      });
      return response;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

  export const fetchmoderator = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/moderator/all_moderator`, {
        headers: {
          Authorization: `Bearer ${Token}`, 
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };
  export const fetchoprator = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/admin/all_operators`,{
        "userid": 0,               
      }, {
        headers: {
          Authorization: `Bearer ${Token}`, 
        },
      });
      return response;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };