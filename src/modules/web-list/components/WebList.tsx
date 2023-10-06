import { ContentHeader } from "../../../components/content-header/ContentHeader";
import { ItemList } from "../../../components/item-list";
import { ListType } from "../../../components/item-list/components/ItemList";
import s from './styles.module.scss';
import { ReactComponent as BSC} from "../../../assets/icons/crypto/binance-smartchain.svg";
import { ReactComponent as ETH} from "../../../assets/icons/crypto/ethereum-eth.svg";
import { ReactComponent as Polygon} from "../../../assets/icons/crypto/polygon-matic-logo.svg";
import { ReactComponent as Aurora} from "../../../assets/icons/crypto/Aurora.svg";
import { ReactComponent as Optomism} from "../../../assets/icons/crypto/optimism-ethereum-op-logo.svg";
import { ReactComponent as Avalanche} from "../../../assets/icons/crypto/avalanche-avax-logo 2.svg";
import { ReactComponent as Mantle} from "../../../assets/icons/crypto/mantle.svg";
import { ReactComponent as Bitgert} from "../../../assets/icons/crypto/bitgert-logo.svg";
import { ReactComponent as Kawa} from "../../../assets/icons/crypto/kawa-networks.svg";
import { ReactComponent as Metis} from "../../../assets/icons/crypto/avalanche-avax-logo 2.svg";
import { ReactComponent as Arbitrium} from "../../../assets/icons/crypto/arbitrum-arb-logo.svg";
import { ReactComponent as Chia} from "../../../assets/icons/crypto/chia-network-xch-logo.svg";
import { TContractTypes } from "../../../storage/contract/types";

export const WEB_TYPES:TContractTypes = [
    {label: <span><BSC />Binance Smart Chain</span>, value: "bsc"},
    {label: <span><ETH />Ethereum</span>, value: "eth"},
    {label: <span><Polygon />Polygon MATIC</span>, value: "bsc2"},
    {label: <span><Aurora />Aurora</span>, value: "aurora"},
    {label: <span><Optomism />Optimism</span>, value: "optimism"},
    {label: <span><Avalanche />Avalanche</span>, value: "avalanche"},
    {label: <span><Mantle />Mantle</span>, value: "mantle"},
    {label: <span><Bitgert />Bitgert</span>, value: "bitgert"}, 
    {label: <span><Kawa />Kawa Networks</span>, value: "kawaNetworks"},
    {label: <span><Metis />Metis Andromeda Mainnet</span>, value: "mam"},   
    {label: <span><Arbitrium />Arbitrium One</span>, value: "arbitriumOne"},   
    {label: <span><Chia />Chia networks</span>, value: "chiaNetworks"},  
]

export const WebList = () => {

    return (
        <section className={s.web_list_wrapper}>
            <ContentHeader title="Выберите сеть">
                <span className="step">{"ШАГ (3 / 4)"}</span>
            </ContentHeader>
            <ItemList type={ListType.web} list={WEB_TYPES} />
        </section>
    )
}