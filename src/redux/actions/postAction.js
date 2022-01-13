import { SET_LIST_POST } from "./types";

export const setListPostState = listPosts => dispatch => {
  dispatch({
    type: SET_LIST_POST,
    payload: listPosts
  });
};