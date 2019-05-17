import axios from "axios";

// whenever you use the async await syntax babel assumes theres
// something called regenerator runtime defined in your working environemnt
export const FETCH_USERS = "fetch_users";
export const fetchUsers = () => async dispatch => {
  const res = await axios.get("https://react-ssr-api.herokuapp.com/users");

  dispatch({ type: FETCH_USERS, payload: res });
};
