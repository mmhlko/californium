import Select, { SingleValue, components } from 'react-select'
import s from './styles.module.scss';
import "./custom.scss"
import classNames from 'classnames';
import { ListType } from '../item-list/components/ItemList';
import { useDispatch } from 'react-redux';
import { setContractTypeAction } from '../../storage/contract/contractReducer';

type Option = {
    value: string,
    label: string
}

type SortSelectProps = {
    options: Option[],
    type: "web" | "status" | "types" | "contract"
}

const Input = (inputProps: any) => <components.Input {...inputProps} autoComplete="nope" /> //убирает автозаполнение

export const Selector = ({options, type}:SortSelectProps) => {

    const dispatch = useDispatch();
    const onChange = (option:SingleValue<Option>) => {
        switch (type) {
            case ListType.contract:
                (option?.label && option.value) && 
                dispatch(setContractTypeAction({value: option.value, label:option.label}))
                break;        
            default:
                break;
        }
    }

    return (

        <>
            <Select 
                classNamePrefix="custom-select"
                className={classNames(s.selector, s[`selector-type-${type}`])} 
                placeholder="Выберити ти контракта"
                options={options}
                isSearchable={false}
                autoFocus={false}
                components={{ Input }}
                onChange={onChange}                
            />
        </>
    )
}
