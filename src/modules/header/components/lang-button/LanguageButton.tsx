import s from './styles.module.scss';
import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import "./custom.scss"
import {ReactComponent as RuSvg} from "./assets/ru.svg";
import {ReactComponent as UsSvg} from "./assets/us.svg";

const options = [
    { value: "ru", label: <span>RU <RuSvg /></span> },
    { value: "en", label: <span>US <UsSvg /></span> }
]

export const LanguageButton = () => {
    const [value, setValue] = useState(options[0]);

    const onChange = (option:SingleValue<any>) => {
        setValue(option?.value)
        console.log(option?.value)
    }

    return (
        <Select 
        classNamePrefix="language-select"
        className={s.selector} 
        defaultValue={value}
        options={options}
        isSearchable={false}
        autoFocus={false}
        onChange={onChange}
    />
    )
}