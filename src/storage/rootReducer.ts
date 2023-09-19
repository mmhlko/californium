import { combineReducers } from "redux";
import { contractReducer } from "./contract/contractReducer";
import { walletReducer } from "./wallet/walletReducer";

export const rootReducer = combineReducers({
    contract: contractReducer,
    wallet: walletReducer,
})

