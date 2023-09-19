import s from './styles.module.scss';
import { ReactComponent as PenSvg } from "../../assets/pen.svg";
import { ReactComponent as StatusSvg } from "../../assets/status.svg"
import { ReactComponent as DateSvg } from "../../assets/date.svg"
import { ReactComponent as SmartTypeSvg } from "../../assets/smart-type.svg"
import { ReactComponent as WebSvg } from "../../assets/web.svg"
import { ReactComponent as ChainSvg } from "../../assets/chain.svg"
import { ReactComponent as Download } from "../../../../assets/icons/useability/download.svg"
import { useMediaQueries } from '../../../../hooks/useMediaQuery';
import { tableData } from '../../constants/tableData';
import { CreateContractButton } from '../../../../components/create-contract-button/CreateButton';

export const Table = () => {
    const { xs } = useMediaQueries();

    return (
        <div className={s.scroll_table}>
            <div className={s.scroll_table_body}>
                <table>
                    <thead>
                        <tr>
                            <th className={s.name_column}><span><PenSvg className={s.hide} />Название</span></th>
                            <th className={s.status_column}><span><StatusSvg className={s.hide} />Статус</span></th>
                            <th className={s.date_column}><span><DateSvg className={s.hide} />Дата создания</span></th>
                            <th className={s.smartType_column}><span><SmartTypeSvg className={s.hide} />{`Тип ${!xs ? "смарт контракта" : ""}`}</span></th>
                            <th className={s.web_column}><span><WebSvg className={s.hide} />Сеть</span></th>
                            <th className={s.download_web_column}><span><ChainSvg /><span className={s.hide}>Сертификат</span></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(item => 
                            <tr>
                                <td className={s.name_column}>{xs ? item.title.short : item.title.long}</td>
                                <td className={s.status_column}>{item.status}</td>
                                <td className={s.date_column}>{item.date}</td>
                                <td className={s.smartType_column}>{xs ? item.smartType.short : item.smartType.long}</td>
                                <td className={s.web_column}>{xs ? item.web.short : item.web.long}</td>
                                <td className={s.download_web_column}><a href={item.url} className={s.download_link}><Download /><span className={s.hide}>Скачать</span></a></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
            <CreateContractButton />
        </div>

    )
} 