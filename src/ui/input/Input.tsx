import s from "./styles.module.scss";
import { ChangeEvent, HTMLProps } from "react";

interface IFormInputProps extends HTMLProps<HTMLInputElement> {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, onChange, placeholder, type="text", ...rest}: IFormInputProps) => {

    return (
        <input
            type={type}
            
            className={s.input}
            onChange={onChange}
            placeholder={placeholder}
            {...rest}
        />
    )
}