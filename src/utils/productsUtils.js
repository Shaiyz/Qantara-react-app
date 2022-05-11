import backend from "../lib/request";
import { API_ENDPOINTS } from "./apiEndpoints";

export const getAllProducts = async (productID) =>
  await backend({
    method: "GET",
    url: productID
      ? `${API_ENDPOINTS.PRODUCTS.GET_PRODUCTS}?_id=${productID}`
      : API_ENDPOINTS.PRODUCTS.GET_PRODUCTS,
  });
