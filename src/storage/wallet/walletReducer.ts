import { SET_WALLET } from "./constants";
import { TSetWalletAction, TWalletActions, TWalletState } from "./types";


const initialState:TWalletState = {
    walletNumber: 'Подключить кошелек',
}

export const walletReducer = (state = initialState, action: TWalletActions) => {
    switch (action.type) {
        case SET_WALLET: {
            return {...state, walletNumber: action.payload}
        }
        default:
            return state
    }
}

//actions
export const setWalletAction = (contractType: string):TSetWalletAction => {
    return {
        type: SET_WALLET,
        payload: contractType,
    }
}