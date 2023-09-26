import { SyntheticEvent } from "react";
import s from "./styles.module.scss";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setContractTypeAction, setWebTypeAction } from "../../../storage/contract/contractReducer";
import { TContractTypeItem, TContractTypes } from "../../../storage/contract/types";
import { walletConnectionChange } from "../../../../scripts/web3";


export enum ListType {
    contract = "contract",
    web = "web",
}

type ContractTypeListProps = {
    list: TContractTypes,
    type: ListType
}

export const ItemList = ({ list, type }: ContractTypeListProps) => {

    const dispatch = useDispatch();

    const handleClick = (e: SyntheticEvent<HTMLInputElement>, item:TContractTypeItem) => {
        
        switch (type) {
            case ListType.contract:
                dispatch(setContractTypeAction({value: e.currentTarget.value, label:item.label}))
                break;
            case ListType.web:
                dispatch(setWebTypeAction(e.currentTarget.value))
                walletConnectionChange(e.currentTarget.value)

                break;
            default:
                break;
        }
    }

    const returnListItem = (item: TContractTypeItem, index: number) => (
        <li className={classNames(s.item, s[`item-${type}`])} key={index}>
            <input onClick={(e) => handleClick(e, item)} type="radio" id={`conract-${item.value}-${index}`} name={`${type}-types`} value={item.value} />
            <label htmlFor={`conract-${item.value}-${index}`}>{item.label}</label>
        </li>
    )

    return (
        <div className={s.wrapper}>
            <ul className={classNames(s.list, s[`list-${type}`])}>
                {list.map(returnListItem)}
            </ul>
        </div>
    )
}


