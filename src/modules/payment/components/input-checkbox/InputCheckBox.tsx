import { useDispatch } from 'react-redux';
import s from './styles.module.scss';
import { ChangeEvent, useState } from "react";
import { addFormInputValueAction } from '../../../../storage/payment-form/paymentFormReducer';
import classNames from 'classnames';
import { Input } from '../../../../ui/input/Input';
import { InputType } from '../../types/types';

export const InputCheckBox = () => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const handleCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target
        setChecked(input.checked)
        dispatch(addFormInputValueAction({name: input.name, value: input.checked}))            
    }

    return (
        <div className={classNames(s.input_checkbox)}>
            <Input checked={checked} onChange={handleCheckboxClick} id="checkbox" name="checkbox" type={InputType.checkbox} />
            <label htmlFor="checkbox"></label>
        </div>
    )
}