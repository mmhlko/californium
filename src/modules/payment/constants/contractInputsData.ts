import { TPaymentInput } from "../components/Payment"
import { ContractTypes, InputType, InputVariety } from "../types/types"

export type TContractInputsData = {
    [name: string]: TPaymentInput[]
}

export const contractInputsData:TContractInputsData = {
    [ContractTypes.ERC20]: [
        { title: "Token name", placeHolder: "my fancy token", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Token Symbol", placeHolder: "Real fancy", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Total supply", placeHolder: "1.000.000.000", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Decimales Number (1-18)", placeHolder: "", type: InputType.number, wide: false, alone: false, variety: InputVariety.number },
        { title: "Initial Owner", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, alone: false, variety: InputVariety.wallet },
    ],
    [ContractTypes.ICO]: [
        { title: "Token Address", placeHolder: "Adress of your token", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Wallet address", placeHolder: "Адрес контракта токена", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Rate", placeHolder: "Enter rate", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Token blocking period", placeHolder: "дд.мм.гг", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Владелец", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, alone: false, variety: InputVariety.wallet },
    ],
    [ContractTypes.NFT_ERC721]: [
        { title: "NFT название", placeHolder: "NFT название", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Символ NFT", placeHolder: "Символ NFT", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Имя токена", placeHolder: "Имя токена", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Базовый URL", placeHolder: "Базовый URL", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Адрес Владельца", placeHolder: "Адрес Владельца", type: InputType.text, wide: true, alone: false, variety: InputVariety.wallet },
    ],
    [ContractTypes.DAO]: [
        { title: "Название DAO", placeHolder: "Название DAO", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Символ", placeHolder: "Символ", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Адрес партнера", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, alone: false, variety: InputVariety.general },
        { title: "Количество токенов", placeHolder: "Количество токенов", type: InputType.text, wide: true, alone: false, variety: InputVariety.wallet },
    ],
    [ContractTypes.LOTTERY]: [
        { title: "Ticket price", placeHolder: "Enter the ticket price", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Winners Count", placeHolder: "Enter number of winners", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Owner address", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, alone: false, variety: InputVariety.general },
        { title: "Percentage of winners", placeHolder: "", type: InputType.number, wide: true, alone: false, variety: InputVariety.number },
    ],
    [ContractTypes.VESTING]: [
        { title: "Benefitt address", placeHolder: "Enter the ticket price", type: InputType.text, wide: false, alone: true, variety: InputVariety.general },
        { title: "Vesting start", placeHolder: "дд.мм.гг", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Vesting duration", placeHolder: "дд.мм.гг", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Total tokens", placeHolder: "Enter total tokkens", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Revocable", placeHolder: "", type: InputType.checkbox, wide: false, alone: false, variety: InputVariety.general },
        { title: "Address", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, alone: false, variety: InputVariety.general },
    ],
    [ContractTypes.STAKING]: [
        { title: "Ticket name", placeHolder: "Enter the ticket price", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Token Symbol", placeHolder: "Enter number of winners", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Rewards per hour", placeHolder: "Reward count houer in wei", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Compound frequency", placeHolder: "Reward count houer in wei", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Minimum stacking", placeHolder: "Reward count houer in wei", type: InputType.text, wide: true, alone: true, variety: InputVariety.general },
        { title: "Address", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, alone: false, variety: InputVariety.general },
    ],
}