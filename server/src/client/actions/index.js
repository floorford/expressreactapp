// whenever you use the async await syntax babel assumes theres
// something called regenerator runtime defined in your working environemnt

// now we have thunk with extra arguments, the api here refers to our axios config with either be /api/users or herokublah/users
// based on whether its from server or client
export const FETCH_USERS = "fetch_users";
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("/users");

  dispatch({ type: FETCH_USERS, payload: res });
};

export const FETCH_CURRENT_USER = "fetch_current_user";
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");

  dispatch({ type: FETCH_CURRENT_USER, payload: res });
};

export const FETCH_ADMINS = "fetch_admins";
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get("/admins");

  dispatch({ type: FETCH_ADMINS, payload: res });
};
