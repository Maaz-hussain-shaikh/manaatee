export const fetchPageData = (url, page) => async (dispatch) => {
    dispatch({ type: 'FETCH_PAGE_REQUEST' });
    try {
      const response = await fetch(`${url}?page=${page}&limit=1`);
      const data = await response.json();
      dispatch({
        type: 'FETCH_PAGE_SUCCESS',
        payload: { page, data, },
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_PAGE_FAILURE',
        payload: { error },
      });
    }
  };
  