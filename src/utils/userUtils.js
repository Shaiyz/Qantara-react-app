import backend from "../lib/request";
import { API_ENDPOINTS } from "./apiEndpoints";

export const createCustomer = async (customerObj) =>
  await backend({
    method: "POST",
    url: API_ENDPOINTS.USERS.CREATE_CUSTOMER,
    data: customerObj,
  });

export const loginCustomer = async (loginObj) =>
  await backend({
    method: "POST",
    url: API_ENDPOINTS.USERS.LOGIN_USER,
    data: loginObj,
  });

export const checkState = async () =>
  await backend({
    method: "GET",
    url: API_ENDPOINTS.USERS.CHECK_STATE,
  });
