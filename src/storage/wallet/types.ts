import { SET_WALLET } from "./constants"

export type TWalletActions = TSetWalletAction;

export type TSetWalletAction = {
    type: typeof SET_WALLET,
    payload: string
}

export type TWalletState = {
    walletNumber: string,
}

