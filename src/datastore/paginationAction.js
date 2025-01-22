import axios from "axios";

export const fetchPageData = (url, page) => async (dispatch) => {
    dispatch({ type: 'FETCH_PAGE_REQUEST' });
    try {
      const response = await axios.get(`${url}?page=${page}&limit=3`, {
        headers: {
          authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
        }});
      const data = await response.data;
      const totalpage = await response.data
      
      dispatch({
        type: 'FETCH_PAGE_SUCCESS',
        payload: {page,data,totalpage},
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_PAGE_FAILURE',
        payload: { error },
      });
    }
  };
  