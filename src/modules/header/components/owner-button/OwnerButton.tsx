import { useEffect } from "react";
import { useAppSelector } from "../../../../storage/hookTypes";
import { Button } from "../../../../ui/button/Button"
import ContractLogoSvg from "../../assets/conract-logo.svg";


export const OwnerButton = () => {

    const ownerWallet = useAppSelector(state => state.wallet.walletNumber);
    const cutWalletString = (wallet: string) => {
        if (wallet.length > 15) {
            return `${wallet}`.split("").slice(0, 6).join('') + "..." + `${wallet}`.split("").splice(wallet.length - 4).join('')
        } else return `${wallet}`
    }

    useEffect(() => {
        cutWalletString(ownerWallet)
    }, [ownerWallet])

    return (
        <Button extraClass="contract_btn">
            <img src={ContractLogoSvg} alt="contact-logo" />
            <span>{cutWalletString(ownerWallet)}</span>
        </Button>
    )
}