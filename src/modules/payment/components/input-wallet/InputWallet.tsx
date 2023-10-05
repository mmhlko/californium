import s from './styles.module.scss';
import { useAppSelector } from "../../../../storage/hookTypes";
import { ReactComponent as CopyBtnSvg } from "../../assets/copy-btn.svg";
import { TPaymentInput } from "../Payment";
import { Input } from '../../../../ui/input/Input';

export const InputWallet = ({ item }: { item: TPaymentInput }) => {

    const walletNumber = useAppSelector(state => state.wallet.walletNumber);
    const handleCopyWalletClick = () => {
        navigator.clipboard.writeText(walletNumber)
    }

    return (
        <div className={s.input_wallet}>
            <Input id={item.title} value={walletNumber} placeholder={item.placeHolder} type={item.type} readOnly/>
            <CopyBtnSvg onClick={handleCopyWalletClick} />
        </div>
    )
}