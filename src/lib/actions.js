import { SET_IS_AUTHENTICATE, SET_NOTIFICATION_MESSAGE, SET_USER_DATA } from "./constant";

export const setUserData = (data) => ({
    type: SET_USER_DATA,
    payload: data
})

export const setIsAuthenticate = (data) => ({
    type: SET_IS_AUTHENTICATE,
    payload: data
})

export const setNotificationMessage = (data) => ({
    type: SET_NOTIFICATION_MESSAGE,
    payload: data
})