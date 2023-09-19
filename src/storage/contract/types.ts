import { SET_CONTRACT_TYPE, SET_WEB_TYPE } from "./constants";
import { ReactNode } from 'react';

export type TContractActions = TSetContractTypeAction | TSetWebTypeAction;

export type TSetContractTypeAction = {
    type: typeof SET_CONTRACT_TYPE,
    payload: TContractTypeItem
}
export type TSetWebTypeAction = {
    type: typeof SET_WEB_TYPE,
    payload: string
}

export type TContractState = {
    contractType: TContractTypeItem,
    webType: string
}

export type TContractTypes = {label: ReactNode, value: string}[];
export type TContractTypeItem = {label: string, value: string};