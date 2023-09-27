import { TPaymentInput } from "../components/Payment"
import { ContractTypes, InputType, InputVariety } from "../types/types"

export type TContractInputsData = {
    [name: string]: TPaymentInput[]
}

export const contractInputsData:TContractInputsData = {
    [ContractTypes.ERC20]: [
        { title: "Token name", name: "tokenName", placeHolder: "my fancy token", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Token Symbol", name: "tokenSymbol", placeHolder: "Real fancy", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Total supply", name: "totalSupply", placeHolder: "1.000.000.000", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Decimales Number (1-18)", name: "decimalesNumber", placeHolder: "", type: InputType.number, wide: false, alone: false, variety: InputVariety.number },
        { title: "Initial Owner", name: "initialOwner", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, alone: false, variety: InputVariety.wallet },
    ],
    [ContractTypes.ICO]: [
        { title: "Token Address", name: "tokenAddress", placeHolder: "Adress of your token", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Wallet address", name: "walletaddress", placeHolder: "Адрес контракта токена", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Rate", name: "rate", placeHolder: "Enter rate", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Token blocking period", name: "tokenBblockingPeriod", placeHolder: "дд.мм.гг", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Владелец", name: "owner", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, alone: false, variety: InputVariety.wallet },
    ],
    [ContractTypes.NFT_ERC721]: [
        { title: "NFT название", name: "nftName", placeHolder: "NFT название", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Символ NFT", name: "nftSymbol", placeHolder: "Символ NFT", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Имя токена", name: "tokenName", placeHolder: "Имя токена", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Базовый URL", name: "baseUrl", placeHolder: "Базовый URL", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Адрес Владельца", name: "owner", placeHolder: "Адрес Владельца", type: InputType.text, wide: true, alone: false, variety: InputVariety.wallet },
    ],
    [ContractTypes.DAO]: [
        { title: "Название DAO", name: "daoName", placeHolder: "Название DAO", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Символ", name: "symbol", placeHolder: "Символ", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Адрес партнера", name: "partnerAdress", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, alone: false, variety: InputVariety.general },
        { title: "Количество токенов", name: "tokenCount", placeHolder: "Количество токенов", type: InputType.text, wide: true, alone: false, variety: InputVariety.wallet },
    ],
    [ContractTypes.LOTTERY]: [
        { title: "Ticket price", name: "ticketPrice", placeHolder: "Enter the ticket price", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Winners Count", name: "winnersCount", placeHolder: "Enter number of winners", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Owner address", name: "owner", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, alone: false, variety: InputVariety.wallet },
        { title: "Percentage of winners", name: "percentage", placeHolder: "", type: InputType.number, wide: true, alone: false, variety: InputVariety.number },
    ],
    [ContractTypes.VESTING]: [
        { title: "Benefitt address", name: "benefittAddress", placeHolder: "Enter the ticket price", type: InputType.text, wide: false, alone: true, variety: InputVariety.general },
        { title: "Vesting start", name: "vestingStart", placeHolder: "дд.мм.гг", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Vesting duration", name: "vestingDuration", placeHolder: "дд.мм.гг", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Total tokens", name: "totalTokens", placeHolder: "Enter total tokkens", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Revocable", name: "revocable", placeHolder: "", type: InputType.checkbox, wide: false, alone: false, variety: InputVariety.general },
        { title: "Address", name: "address", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, alone: false, variety: InputVariety.general },
    ],
    [ContractTypes.STAKING]: [
        { title: "Ticket name", name: "ticketName", placeHolder: "Enter the ticket price", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Token Symbol", name: "tokenSymbol", placeHolder: "Enter number of winners", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Rewards per hour", name: "rewardsPerHour", placeHolder: "Reward count houer in wei", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Compound frequency", name: "compoundFrequency", placeHolder: "Reward count houer in wei", type: InputType.text, wide: false, alone: false, variety: InputVariety.general },
        { title: "Minimum stacking", name: "minimumStacking", placeHolder: "Reward count houer in wei", type: InputType.text, wide: true, alone: true, variety: InputVariety.general },
        { title: "Address", name: "address", placeHolder: "0x7a7a85e3cb5cc470fe419b3d79eefee128ba7da2", type: InputType.text, wide: true, alone: false, variety: InputVariety.general },
    ],
}