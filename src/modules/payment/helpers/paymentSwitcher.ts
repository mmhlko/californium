import { TPaymentData } from "../../../storage/payment-form/types";
import { ContractTypes } from "../../../utils/contractTypes";

export const paymentSwitcher = (contractTypeValue: string, paymentData:TPaymentData) => {
    switch (contractTypeValue) {
        case ContractTypes.ERC20:
            console.log("contractTypeValue: ", contractTypeValue, "paymentData :", paymentData);            
            break;
    
        default:
            break;
    }

}