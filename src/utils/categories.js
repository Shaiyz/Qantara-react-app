import backend from "../lib/request";
import { API_ENDPOINTS } from "./apiEndpoints";

export const getSubCategories = async () =>
  await backend({
    method: "GET",
    url: API_ENDPOINTS.CATEGORIES.GET_SUBCATEGORIES,
  });
