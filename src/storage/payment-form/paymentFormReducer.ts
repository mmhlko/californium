import { ADD_INPUT_ITEM, RESET_FORM } from "./constants";
import { TAddFormInputValueAction, TPaymentFormActions, TPaymentFormItem, TPaymentFormState, TResetFormAction } from "./types";

const initialState:TPaymentFormState = {
    data: null
}

export const paymentFormReducer = (state = initialState, action: TPaymentFormActions) => {
    switch (action.type) {
        case ADD_INPUT_ITEM: {
            return {...state, data: {...state.data, [action.payload.name]: action.payload.value}}
        }
        case RESET_FORM: {
            return initialState
        }
        default:
            return state
    }
}

//actions
export const addFormInputValueAction = (contractType: TPaymentFormItem):TAddFormInputValueAction => {
    return {
        type: ADD_INPUT_ITEM,
        payload: contractType,
    }
}

export const resetFormAction = ():TResetFormAction => {
    return {
        type: RESET_FORM,
    }
}