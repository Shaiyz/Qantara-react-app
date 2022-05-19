import { createURLencode } from "../lib/helper";
import backend from "../lib/request";
import { API_ENDPOINTS } from "./apiEndpoints";

const product = [
  {
    path: "product_category",
  },
  {
    path: "product_subcategory",
  },
];

const productPopulate = createURLencode(product);

export const getAllProducts = async (productID) =>
  await backend({
    method: "GET",
    url: productID
      ? `${API_ENDPOINTS.PRODUCTS.GET_PRODUCTS}?_id=${productID}&populate=${productPopulate}`
      : API_ENDPOINTS.PRODUCTS.GET_PRODUCTS,
  });

export const getProductSubCategory = async (prodCatName) =>
  await backend({
    method: "GET",
    url: `${API_ENDPOINTS.PRODUCTS.GET_PRODUCTS}?product_subcategory=${prodCatName}`,
  });
