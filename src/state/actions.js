import axios from "axios";

export const getProducts = (products) => {
  return {
    type: "PRODUCTS",
    payload: products,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => dispatch(
        // { type: "PRODUCTS", payload: data.data }
        getProducts(data.data)
      ));
  };
};
