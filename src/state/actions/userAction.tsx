import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { USER_LOGIN_SUCCESS } from "../../constants/userConstants";

// logging the user in
export const login = (email: string, password: string) => async (dispatch: any) => {
  console.log(`${email}, ${password}`);
};
