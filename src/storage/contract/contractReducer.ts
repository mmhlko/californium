import { SET_CONTRACT_TYPE, SET_WEB_TYPE } from "./constants";
import { TContractActions, TContractState, TContractTypeItem, TSetContractTypeAction, TSetWebTypeAction } from "./types";

const initialState:TContractState = {
    contractType: {label: '', value: ''},
    webType: '',
}

export const contractReducer = (state = initialState, action: TContractActions) => {
    switch (action.type) {
        case SET_CONTRACT_TYPE: {
            return {...state, contractType: action.payload}
        }
        case SET_WEB_TYPE: {
            return {...state, webType: action.payload}
        }
        default:
            return state
    }
}

//actions
export const setContractTypeAction = (contractTypeItem: TContractTypeItem):TSetContractTypeAction => {
    return {
        type: SET_CONTRACT_TYPE,
        payload: contractTypeItem,
    }
}
export const setWebTypeAction = (webType: string): TSetWebTypeAction => {
    return {
        type: SET_WEB_TYPE,
        payload: webType
    }
}



