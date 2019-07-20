import { FETCH_CURRENT_USER } from "../actions";

// null = dont yet know whether user is authenticated
export default (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};
