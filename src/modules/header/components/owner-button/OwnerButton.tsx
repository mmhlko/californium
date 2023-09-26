import { useEffect } from "react";
import { useAppSelector } from "../../../../storage/hookTypes";
import { Button } from "../../../../ui/button/Button"
import ContractLogoSvg from "../../assets/conract-logo.svg";
import { metamaskConnection } from "../../../../../scripts/web3";
import { useDispatch } from "react-redux";
import { setWalletAction } from "../../../../storage/wallet/walletReducer";

export const OwnerButton = () => {
    const dispatch = useDispatch()

    const ownerWallet = useAppSelector(state => state.wallet.walletNumber);
    let walletAddress:string;
   
    const handleMetamaskConnectionClick = async () => {
         walletAddress = await metamaskConnection();
         dispatch(setWalletAction(walletAddress))
        console.log("ssss",typeof walletAddress);
        
    }

    const cutWalletString = (wallet: string) => {
        if (wallet.length > 15) {
            return `${wallet}`.split("").slice(0, 6).join('') + "..." + `${wallet}`.split("").splice(wallet.length - 4).join('')
        } else return `${wallet}`
    };
    useEffect(() => {
        cutWalletString(ownerWallet)
    }, [ownerWallet])

    return (
        <Button extraClass="contract_btn" action={handleMetamaskConnectionClick}>
            <img src={ContractLogoSvg} alt="contact-logo" />
            <span>{cutWalletString(ownerWallet)}</span>
        </Button>
    )
}