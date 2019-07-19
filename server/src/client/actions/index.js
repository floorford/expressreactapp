// whenever you use the async await syntax babel assumes theres
// something called regenerator runtime defined in your working environemnt
export const FETCH_USERS = "fetch_users";

// now we have thunk with extra arguments, the api here refers to our axios config with either be /api/users or herokublah/users
// based on whether its from server or client
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("/users");

  dispatch({ type: FETCH_USERS, payload: res });
};
