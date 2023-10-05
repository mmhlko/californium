import Select, { SingleValue, components } from 'react-select'
import s from './styles.module.scss';
import "./custom.scss"
import classNames from 'classnames';
import { ListType } from '../item-list/components/ItemList';
import { useDispatch } from 'react-redux';
import { setContractTypeAction } from '../../storage/contract/contractReducer';
import { useEffect, useState } from 'react';
import { ReactNode } from "react";

type Option = {
    value: string,
<<<<<<< HEAD
    label: string | ReactNode
=======
    label: string //| ReactNode
>>>>>>> 3d3458bfaf6699d721522c6aacf5462bf9483065
}

type SortSelectProps = {
    options: Option[],
    type: SelectorOptions | ListType
}

export enum SelectorOptions {
    web = "web",
    status = "status",
    types = "types",
    contract = "contract",
}

const Input = (inputProps: any) => <components.Input {...inputProps} autoComplete="nope" /> //убирает автозаполнение

export const Selector = ({ options, type }: SortSelectProps) => {

    const dispatch = useDispatch();
    const [placeholder, setPlaceholder] = useState('');
    const onChange = (option: SingleValue<Option>) => {
        switch (type) {
            case SelectorOptions.contract:
                (option?.label && option.value) &&
                    dispatch(setContractTypeAction({ value: option.value, label: option.label }))
                break;
            case SelectorOptions.web:
                break;
            case SelectorOptions.status:
                break;
            case SelectorOptions.types:
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        switch (type) {
            case SelectorOptions.web:
                setPlaceholder("Все сети")
                break;
            case SelectorOptions.status:
                setPlaceholder("Все статусы")
                break;
            case SelectorOptions.types:
                setPlaceholder("Все типы")
                break;
            case SelectorOptions.contract:
                setPlaceholder("Выберите тип контракта")
                break;
            default:
                break;
        }
    }, [])

    return (

        <>
            <Select
                classNamePrefix="custom-select"
                className={classNames(s.selector, s[`selector-type-${type}`])}
                placeholder={placeholder}
                options={options}
                isSearchable={false}
                autoFocus={false}
                components={{ Input }}
                onChange={onChange}
            />
        </>
    )
}
