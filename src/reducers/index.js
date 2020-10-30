const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) {
        return { ...state };
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };

    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };

    case "SEARCH_VIDEOS":
      return {
        ...state,
        filtered:
          action.payload === ""
            ? []
            : state.trends
                .filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()))
                .concat(
                  state.originals.filter((item) =>
                    item.title.toLowerCase().includes(action.payload.toLowerCase())
                  )
                ),
      };
    default:
      return state;
  }
};

export default reducer;
