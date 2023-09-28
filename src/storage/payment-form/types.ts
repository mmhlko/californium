import { ADD_INPUT_ITEM, RESET_FORM } from "./constants"

export type TPaymentFormItem = {
    name: string,
    value: string | number | boolean
}

export type TPaymentData = {
    [name: string]: string | number | boolean
} | null

export type TPaymentFormState = {
    data: TPaymentData
}

export type TPaymentFormActions = TAddFormInputValueAction | TResetFormAction;

export type TAddFormInputValueAction = {
    type: typeof ADD_INPUT_ITEM,
    payload: TPaymentFormItem
}

export type TResetFormAction = {
    type: typeof RESET_FORM,
}