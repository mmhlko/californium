import { useState, useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { addFormInputValueAction } from "../../../../storage/payment-form/paymentFormReducer";
import classNames from "classnames";
import s from './styles.module.scss';

type InputNumberProps = {
    name: string,
}

export const InputNumber = memo(({name}: InputNumberProps) => {
    const [number, setNumber] = useState(1);
    const dispatch = useDispatch();

    const handleMinusClick = () => {
        if (number !== 1) {
            setNumber(prev => prev - 1)
            dispatch(addFormInputValueAction({name: name, value: number}))
        }           
    }

    const handlePlusClick = () => {
        if (number < 18) {
            setNumber(prev => prev + 1)
            dispatch(addFormInputValueAction({name: name, value: number}))
        }
    }

    useEffect(() => {
        dispatch(addFormInputValueAction({name: name, value: number}))
    }, [])

    return (
        <div className={classNames(s.input_number)}>
            <button onClick={handleMinusClick} className={s.input_number_btn} type="button">-</button>
            <span className={s.input_number_value}>{number}</span>
            <button onClick={handlePlusClick} className={s.input_number_btn} type="button">+</button>
        </div>
    )
})