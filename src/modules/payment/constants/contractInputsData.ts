import { TPaymentInput } from "../components/Payment"
import { ContractTypes, InputType, InputVariety } from "../types/types"

export type TContractInputsData = {
    [ContractTypes.ERC20]: TPaymentInput[],
    [ContractTypes.ICO]: TPaymentInput[],
    [ContractTypes.NFT_ERC721]: TPaymentInput[],
    [ContractTypes.DAO]: TPaymentInput[],
}

export const contractInputsData = {
    [ContractTypes.ERC20]: [
        { title: "Token name", placeHolder: "my fancy token", type: InputType.text, wide: false },
        { title: "Token Symbol", placeHolder: "Real fancy", type: InputType.text, wide: false },
        { title: "Total supply", placeHolder: "1.000.000.000", type: InputType.text, wide: false },
        { title: "Decimales Number (1-18)", placeHolder: "", type: InputType.number, wide: false, variety: InputVariety.number },
        { title: "Initial Owner", placeHolder: "", type: InputType.text, wide: true, variety: InputVariety.wallet },
    ],
    [ContractTypes.ICO]: [
        { title: "Token Address", placeHolder: "Adress of your token", type: InputType.text, wide: false },
        { title: "Wallet address", placeHolder: "Адрес контракта токена", type: InputType.text, wide: false },
        { title: "Rate", placeHolder: "Enter rate", type: InputType.text, wide: false },
        { title: "Token blocking period", placeHolder: "дд.мм.гг", type: InputType.text, wide: false },
        { title: "Владелец", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, variety: InputVariety.wallet},
    ],
    [ContractTypes.NFT_ERC721]: [
        { title: "NFT название", placeHolder: "NFT название", type: InputType.text, wide: false },
        { title: "Символ NFT", placeHolder: "Символ NFT", type: InputType.text, wide: false },
        { title: "Имя токена", placeHolder: "Имя токена", type: InputType.text, wide: false },
        { title: "Базовый URL", placeHolder: "Базовый URL", type: InputType.text, wide: false },
        { title: "Адрес Владельца", placeHolder: "Адрес Владельца", type: InputType.text, wide: true, variety: InputVariety.wallet },
    ],
    [ContractTypes.DAO]: [
        { title: "Название DAO", placeHolder: "Название DAO", type: InputType.text, wide: false },
        { title: "Символ", placeHolder: "Символ", type: InputType.text, wide: false },
        { title: "Адрес партнера", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true },
        { title: "Количество токенов", placeHolder: "Количество токенов", type: InputType.text, wide: true, variety: InputVariety.wallet },
    ],
    [ContractTypes.LOTTERY]: [
        { title: "Ticket price", placeHolder: "Enter the ticket price", type: InputType.text, wide: false },
        { title: "Winners Count", placeHolder: "Enter number of winners", type: InputType.text, wide: false },
        { title: "Owner address", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true },
        { title: "Percentage of winners", placeHolder: "", type: InputType.number, wide: true, variety: InputVariety.number },
    ],
    [ContractTypes.VESTING]: [
        { title: "Ticket price", placeHolder: "Enter the ticket price", type: InputType.text, wide: false },
        { title: "Winners Count", placeHolder: "Enter number of winners", type: InputType.text, wide: false },
        { title: "Vesting duration", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: false },
        { title: "Total tokens", placeHolder: "Enter total tokkens", type: InputType.text, wide: false },
        { title: "Revocable", placeHolder: "", type: InputType.checkbox, wide: false },
        { title: "Address", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true },
    ],
    [ContractTypes.STAKING]: [
        { title: "Ticket name", placeHolder: "Enter the ticket price", type: InputType.text, wide: false },
        { title: "Token Symbol", placeHolder: "Enter number of winners", type: InputType.text, wide: false },
        { title: "Rewards per hour", placeHolder: "Reward count houer in wei", type: InputType.text, wide: false },
        { title: "Compound frequency", placeHolder: "Reward count houer in wei", type: InputType.text, wide: false },
        { title: "Minimum stacking", placeHolder: "Reward count houer in wei", type: InputType.text, wide: true },
        { title: "Address", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true },
    ],
}