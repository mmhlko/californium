import classNames from "classnames";
import { Input } from "../../../../ui/input/Input";
import s from './styles.module.scss';
import { TPaymentInput } from "../Payment";
import { InputType, InputVariety } from "../../types/types";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { addFormInputValueAction } from "../../../../storage/payment-form/paymentFormReducer";
import { InputNumber } from "../input-number/InputNumber";
import { InputCheckBox } from "../input-checkbox/InputCheckBox";
import { InputWallet } from "../input-wallet/InputWallet";

type CryptoFormInputsProps = {
    inputList: TPaymentInput[]
}

export const CryptoFormInputs = ({ inputList }: CryptoFormInputsProps) => {    
    
    const dispatch = useDispatch();
    const handleTextInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(addFormInputValueAction({name: e.target.name, value: e.target.value}))        
    }

    return (
        <div className={s.inputs_wrapper}>
            {inputList.map((item, index) => (
                <div className={classNames(s.input_item, {[s.input_item_wide]:item.wide, [s.input_item_alone]:item.alone})} key={index}>
                    <span className={s.chain_label}>{item.title}</span>
                    {item.variety !== InputVariety.number
                        ? item.type === InputType.checkbox
                            ? <InputCheckBox />
                            : item.variety === InputVariety.wallet
                                ? <InputWallet item={item} />
                                : <Input id={item.title} placeholder={item.placeHolder} type={item.type} name={item.name} onChange={handleTextInputChange}/>
                        : <InputNumber name={item.name} />
                    }
                </div>
            ))}
        </div>
    )
}
