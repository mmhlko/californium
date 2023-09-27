import { ADD_INPUT_ITEM, RESET_FORM } from "./constants"

export type TPaymentFormItem = {
    name: string,
    value: string | number
}

export type TPaymentFormState = {
    data: {
        [name: string]: string | number
    } | null
}

export type TPaymentFormActions = TAddFormInputValueAction | TResetFormAction;

export type TAddFormInputValueAction = {
    type: typeof ADD_INPUT_ITEM,
    payload: TPaymentFormItem
}

export type TResetFormAction = {
    type: typeof RESET_FORM,
}