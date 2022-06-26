import { fetchCartItems, fetchUser } from "../utils/ftechLocalStorageData";

const userInfo = fetchUser;
const cartInfo = fetchCartItems;
export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
