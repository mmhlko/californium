import s from './styles.module.scss';
import { SortSelect } from "./sort-input/SortInput"
import { Input } from '../../../ui/input/Input';
import { Table } from './contract-table/ContractTable';
import { ReactComponent as SearchIcon } from "../assets/octicon_search-16.svg"
import { FormEvent, useState } from 'react';
import { NotContractFound } from './not-contracts-found/NotContractFound';

const WEB_OPTIONS_1 = [
    { value: "web1", label: "Все сети 0" },
    { value: "web2", label: "Web2" },
    { value: "web3", label: "Web3" },
    { value: "web4", label: "Web4" },
]

const WEB_OPTIONS_2 = [
    { value: "web1", label: "Все cтатусы" },
    { value: "web2", label: "Web2" },
    { value: "web3", label: "Web3" },
    { value: "web4", label: "Web4" },
]

const WEB_OPTIONS_3 = [
    { value: "web1", label: "Все типы" },
    { value: "web2", label: "Web2" },
    { value: "web3", label: "Web3" },
    { value: "web4", label: "Web4" },
]

export const ContractTable = () => {

    const [tableData, setTableData] = useState(false);

    const handleFormSubmit = () => {
        console.log("handleFormSubmit");        
    }
    const handleSearchClick = (e:FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    const handleInputChange = () => {
        console.log("handleInputChange")
    }

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
               <div className={s.sortings}>
                <SortSelect options={WEB_OPTIONS_1} type="web" />
                <SortSelect options={WEB_OPTIONS_2} type="status"/>
                <SortSelect options={WEB_OPTIONS_3} type="types"/>
                <button style={{backgroundColor: "inherit"}} onClick={() => setTableData(!tableData)}>Set table</button>
                </div>
                <form className={s.search} onSubmit={handleFormSubmit}>
                    <Input type="text" placeholder="Поиск" onChange={handleInputChange}/>
                    <button onClick={handleSearchClick} className={s.search__magnifier_btn}><SearchIcon /></button>
                </form>                 
            </div>            
            {tableData
            ? <Table />
            : <NotContractFound />}                       
        </div>
    )
}