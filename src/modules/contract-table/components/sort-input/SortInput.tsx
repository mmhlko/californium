import Select, { SingleValue, components } from 'react-select'
import s from './styles.module.scss';
import "./custom.scss"
import { useState } from 'react';
import classNames from 'classnames';

type Option = {
    value: string,
    label: string
}

type SortSelectProps = {
    options: Option[],
    type: "web" | "status" | "types"
}

const Input = (inputProps: any) => <components.Input {...inputProps} autoComplete="nope" /> //убирает автозаполнение

export const SortSelect = ({options, type}:SortSelectProps) => {

    const [value, setValue] = useState(options[0]);

    const onChange = (option:SingleValue<Option>) => {
        console.log(option?.value)
    }

    return (

        <>
            <Select 
                classNamePrefix="custom-select"
                className={classNames(s.selector, s[`selector-type-${type}`])} 
                defaultValue={value}
                options={options}
                isSearchable={false}
                autoFocus={false}
                components={{ Input }}
                onChange={onChange}
            />
        </>
    )
}
