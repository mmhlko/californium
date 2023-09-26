import { useEffect } from "react";
import { useAppSelector } from "../../../../storage/hookTypes";
import { Button } from "../../../../ui/button/Button"
import ContractLogoSvg from "../../assets/conract-logo.svg";
<<<<<<< HEAD
import {metamaskConnection} from "../../../../../scripts/web3";
import { useDispatch } from "react-redux";
import { setWalletAction } from "../../../../storage/wallet/walletReducer";


=======
import { metamaskConnection } from "../../../../../scripts/web3";
import { useDispatch } from "react-redux";
import { setWalletAction } from "../../../../storage/wallet/walletReducer";
>>>>>>> 08981c76b97999105ec74827bfef97ac8059f603

export const OwnerButton = () => {
    const dispatch = useDispatch()

    const ownerWallet = useAppSelector(state => state.wallet.walletNumber);
<<<<<<< HEAD
    let walletAddress:string;
   
    const handleMetamaskConnectionClick = async () => {
         walletAddress = await metamaskConnection();
         dispatch(setWalletAction(walletAddress))
        console.log("ssss",typeof walletAddress);
        
    }

=======
    const dispatch = useDispatch()
>>>>>>> 08981c76b97999105ec74827bfef97ac8059f603
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