import {userActionTypes} from "./user.types";

export const setUser = user => ({
    type: userActionTypes.SET_USER,
    payload: user,
});