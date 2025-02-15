const initialState = {
    data: {},
    loading: false,
    error: null,
    totalpage:"--",
  };
  
  const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PAGE_REQUEST':
        return { ...state, loading: true, };
      case 'FETCH_PAGE_SUCCESS':
        return {
          ...state,
          loading: false,
          error:null,
          data: {
            ...state.data,
            [action.payload.page]: action.payload.data,
          },
          totalpage: {
            ...state.totalpage,
            totalpage:action.payload.totalpage.totalPages
          }
        };
      case 'FETCH_PAGE_FAILURE':
        return { ...state, loading: false, error: action.payload.error };
      default:
        return state;
    }
  };
  
  export default paginationReducer;
  