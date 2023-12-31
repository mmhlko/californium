export type TContractTypes = {
    [name: string]: string
}
export const ContractTypes: TContractTypes = {
    ERC20: "erc20",
    ICO: "ico",
    NFT_ERC721: "nft_erc_721",
    DAO: "dao",
    LOTTERY: "lottery",
    STAKING: "staking",
    VESTING: "vesting",
}

export enum InputType {
    text = "text",
    number = "number",
    checkbox = "checkbox"
}
export enum InputVariety {
    wallet = "wallet",
    number = "number",
    general = "general"
}