import classNames from "classnames";
import { Input } from "../../../../ui/input/Input"
import s from './styles.module.scss';
import { TPaymentInput } from "../Payment";
import { InputType, InputVariety } from "../../types/types";
import { ChangeEvent, useState } from "react"


type CryptoFormInputsProps = {
    inputList: TPaymentInput[]
}

export const CryptoFormInputs = ({ inputList }: CryptoFormInputsProps) => {

    const [number, setNumber] = useState(1);
    const [checked, setChecked] = useState(false);

    const handleMinusClick = () => {
        number !== 1 && setNumber(prev => prev - 1)
    }
    const handlePlusClick = () => {
        number < 18 && setNumber(prev => prev + 1)
    }
    const handleCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('click', number);
        
        setChecked(e.target.checked)
    }

    const InputNumber = () => {
        return (
            <div className={classNames(s.input_number)}>
                <button onClick={handleMinusClick} className={s.input_number_btn}>-</button>
                <span className={s.input_number_value}>{number}</span>
                <button onClick={handlePlusClick} className={s.input_number_btn}>+</button>
            </div>
        )
    }


    const InputCheckBox = () => {
        return (
            <div className={classNames(s.input_checkbox)}>                
                <Input checked={checked} onChange={handleCheckboxClick} id="checkbox" name="checkbox" type={InputType.checkbox} />
                <label htmlFor="checkbox"></label>
            </div>
        )
    }

    return (
        <div className={s.inputs_wrapper}>
            {inputList.map((item, index) => (
                <div className={classNames(s.input_item, item.wide && s.input_item_wide)} key={index}>
                    <span className={s.chain_label}>{item.title}</span>
                    {item.variety !== InputVariety.number
                        ? item.type === InputType.checkbox
                            ? <InputCheckBox />
                            : <Input id={item.title} onChange={() => { }} placeholder={item.placeHolder} type={item.type} />
                        : <InputNumber />
                    }
                </div>
            ))}
        </div>
    )
}