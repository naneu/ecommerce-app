import { fetchUser } from "../utils/ftechLocalStorageData";

const userInfo = fetchUser;
export const initialState = {
  user: userInfo,
  foodItems: null
};
