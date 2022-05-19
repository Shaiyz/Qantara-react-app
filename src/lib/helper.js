export const toast = {
  success: (setNotificationMessageConnect, message) =>
    setNotificationMessageConnect({
      color: "green",
      isShowNotification: true,
      notificationMessage: message,
    }),

  info: (setNotificationMessageConnect, message) =>
    setNotificationMessageConnect({
      color: "#5d5df0",
      isShowNotification: true,
      notificationMessage: message,
    }),

  error: (setNotificationMessageConnect, message) =>
    setNotificationMessageConnect({
      color: "#eb3737",
      isShowNotification: true,
      notificationMessage: message,
    }),
  alert: (setNotificationMessageConnect, message) =>
    setNotificationMessageConnect({
      color: "#feb04b",
      isShowNotification: true,
      notificationMessage: message,
    }),
};

export const setAccessToken = (token) =>
  window.localStorage.setItem("token", token);

export const getAccessToken = () => window.localStorage.getItem("token");

export const deleteAccessToken = () => window.localStorage.removeItem("token");

export const createURLencode = (data) => encodeURI(JSON.stringify(data));

