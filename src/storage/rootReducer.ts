import { combineReducers } from "redux";
import { contractReducer } from "./contract/contractReducer";
import { walletReducer } from "./wallet/walletReducer";
import { paymentFormReducer } from "./payment-form/paymentFormReducer";

export const rootReducer = combineReducers({
    contract: contractReducer,
    wallet: walletReducer,
    paymentForm: paymentFormReducer
})

