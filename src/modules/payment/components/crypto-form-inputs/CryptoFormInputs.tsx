import classNames from "classnames";
import { Input } from "../../../../ui/input/Input";
import s from './styles.module.scss';
import { TPaymentInput } from "../Payment";
import { InputType, InputVariety } from "../../types/types";
import { ChangeEvent, useState } from "react";
import { useAppSelector } from "../../../../storage/hookTypes";
import { ReactComponent as CopyBtnSvg } from "../../assets/copy-btn.svg";



type CryptoFormInputsProps = {
    inputList: TPaymentInput[]
}

export const CryptoFormInputs = ({ inputList }: CryptoFormInputsProps) => {
    const [input,setInput] = useState("");
    const [number, setNumber] = useState(1);
    const [checked, setChecked] = useState(false);
    const walletNumber = useAppSelector(state => state.wallet.walletNumber)

    const handleMinusClick = () => {
        number !== 1 && setNumber(prev => prev - 1)
    }
    const handlePlusClick = () => {
        number < 18 && setNumber(prev => prev + 1)
    }
    const handleCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }
    const handleCopyWalletClick = () => {
        navigator.clipboard.writeText(walletNumber)
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

    const InputWallet = ({ item }: { item: TPaymentInput }) => {
        return (
            <div className={s.input_wallet}>
                <Input id={item.title} value={walletNumber} placeholder={item.placeHolder} type={item.type} />
                <CopyBtnSvg onClick={handleCopyWalletClick} />
            </div>
        )
    }

    console.log("ssssss",input);
    
    return (
        <div className={s.inputs_wrapper}>
            {inputList.map((item, index) => (
                <div className={classNames(s.input_item, {[s.input_item_wide]:item.wide, [s.input_item_alone]:item.alone})} key={index}>
                    <span className={s.chain_label}>{item.title}</span>
                    {item.variety !== InputVariety.number
                        ? item.type === InputType.checkbox
                            ? <InputCheckBox />
                            : item.variety === InputVariety.wallet
                                ? <InputWallet item={item}/>
                                : <Input id={item.title} placeholder={item.placeHolder} type={item.type} onChange={(event)=>{setInput(event.target.value)}}/>
                        : <InputNumber />
                    }
                </div>
            ))}
        </div>
    )
}
