import s from "./styles.module.scss";
import { IFormInputProps } from "./types";

export const Input = ({ value, onChange, placeholder, type="text", ...rest}: IFormInputProps) => {

    return (
        <input
            type={type}
            value={value}
            className={s.input}
            onChange={onChange}
            placeholder={placeholder}
            {...rest}
        />
    )
}