import { LINK_ACTIONS } from "../actions";
import { generateId } from "../utils";

import "./../types.jsdoc";

/**
 * @param {Link[]} state
 * @param {React.ReducerAction<Link>} action
 * @returns {Link[]}
 */
export const linksReducer = (state = [], action) => {
  switch (action.type) {
    case LINK_ACTIONS.ADD_LINK:
      return [...state, { ...action.payload, id: generateId() }];
    case LINK_ACTIONS.REMOVE_LINK:
      return state.filter((link) => link.id !== action.payload.id);
    case LINK_ACTIONS.RESET:
      return [];
    default:
      return state;
  }
};
