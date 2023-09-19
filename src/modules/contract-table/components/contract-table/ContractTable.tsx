import s from './styles.module.scss';
import { ReactComponent as PenSvg } from "../../assets/pen.svg";
import { ReactComponent as StatusSvg } from "../../assets/status.svg"
import { ReactComponent as DateSvg } from "../../assets/date.svg"
import { ReactComponent as SmartTypeSvg } from "../../assets/smart-type.svg"
import { ReactComponent as WebSvg } from "../../assets/web.svg"
import { ReactComponent as ChainSvg } from "../../assets/chain.svg"
import { ReactComponent as Download } from "../../../../assets/icons/useability/download.svg"



type TTableItem = { title: string, status: string, date: string, smartType: string, web: string, url: string };
type TTableData = TTableItem[]

const tableData: TTableData = [
    { title: "KFvH0102cvd", status: "Deployed", date: "12 июля 2023", smartType: "Type of smart-contract", web: "Ethereum", url: "url" },
    { title: "KFvH0102cvd", status: "Deployed", date: "12 июля 2022", smartType: "Type of smart-contract", web: "Ethereum", url: "url" },
    { title: "KFvH0102cvd", status: "Deployed", date: "12 июля 2023", smartType: "Type of smart-contract", web: "Ethereum", url: "url" },
    { title: "KFvH0102cvd", status: "Deployed", date: "12 июля 2023", smartType: "Type of smart-contract", web: "Ethereum", url: "url" },
    { title: "KFvH0102cvd", status: "Deployed", date: "12 июля 2023", smartType: "Type of smart-contract", web: "Ethereum", url: "url" },
    { title: "KFvH0102cvd", status: "Deployed", date: "12 июля 2023", smartType: "Type of smart-contract", web: "Ethereum", url: "url" },
    { title: "KFvH0102cvd", status: "Deployed", date: "12 июля 2023", smartType: "Type of smart-contract", web: "Ethereum", url: "url" },
    { title: "KFvH0102cvd", status: "Deployed", date: "12 июля 2023", smartType: "Type of smart-contract", web: "Ethereum", url: "url" },
    { title: "KFvH0102cvd", status: "Deployed", date: "12 июля 2023", smartType: "Type of smart-contract", web: "Ethereum", url: "url" },
    { title: "KFvH0102cvd", status: "Deployed", date: "12 июля 2023", smartType: "Type of smart-contract", web: "Ethereum", url: "url" },
]

export const Table = () => {
    return (
        <div className={s.scroll_table}>
            <div className={s.scroll_table_body}>
                <table>
                    <thead>
                        <tr>
                            <th><span><PenSvg />Название</span></th>
                            <th><span><StatusSvg />Статус</span></th>
                            <th><span><DateSvg />Дата создания</span></th>
                            <th><span><SmartTypeSvg />Тип смарт контракта</span></th>
                            <th><span><WebSvg />Сеть</span></th>
                            <th><span><ChainSvg />Сертификат</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(item => 
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.status}</td>
                                <td>{item.date}</td>
                                <td>{item.smartType}</td>
                                <td>{item.web}</td>
                                <td><a href={item.url} className={s.download_link}><Download />Скачать</a></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>

    )
} 