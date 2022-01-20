// For Add Item to Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// For Delete Item From Cart
export const dellCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
