import { ContentHeader } from "../../../components/content-header/ContentHeader";
import { ItemList } from "../../../components/item-list";
import { ListType } from "../../../components/item-list/components/ItemList";
import { Selector } from "../../../components/selector/Selector";
import { useMediaQueries } from "../../../hooks/useMediaQuery";
import { TContractTypes } from "../../../storage/contract/types";
import s from './styles.module.scss';

export const CONTRACT_TYPES:TContractTypes = [
    {label: "ERC-20", value: "erc20"},
    {label: "ERC-20 Deflationary", value: "erc20Deflationary"},
    {label: "NFT ERC-721", value: "nft_erc_721"},
    {label: "DAO", value: "dao"},
    {label: "Crowdsale (ICO)", value: "ico"},
    {label: "Blockchain Lottery", value: "lottery"},
    {label: "Vesting", value: "vesting"},    
    {label: "Farming", value: "farming"},
    {label: "Staking", value: "staking"},    
]

export const ContractTypeList = () => {

    const { sm } = useMediaQueries();

    return (
        <section className={s.contract_list_wrapper}>
            <ContentHeader title="Выберите тип контракта">
                <span className="step">{"ШАГ (2 / 4)"}</span>
            </ContentHeader>
            {!sm 
                ? <ItemList type={ListType.contract} list={CONTRACT_TYPES} />
                : <Selector type={ListType.contract} options={CONTRACT_TYPES}/> 
            }
            
        </section>
    )
}