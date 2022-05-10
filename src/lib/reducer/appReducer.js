import {
  SET_IS_AUTHENTICATE,
  SET_NOTIFICATION_MESSAGE,
  SET_USER_DATA,
} from "../constant";

const User = {
  _id: null,
  email: null,
};

const initialState = {
  userData: null,
  isAuthenticate: false,
  notificationObj: {
    isShowNotification: false,
    notificationMessage: "",
    color: "",
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      state = {
        ...state,
        userData: action.payload,
      };
      break;
    case SET_IS_AUTHENTICATE:
      state = {
        ...state,
        isAuthenticate: action.payload,
      };
      break;
    case SET_NOTIFICATION_MESSAGE:
      state = {
        ...state,
        notificationObj: action.payload,
      };
      break;
  }

  return state;
};
