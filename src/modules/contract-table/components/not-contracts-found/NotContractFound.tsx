import { CreateContractButton } from "../../../../components/create-contract-button/CreateButton";
import { ReactComponent as BoxSvg } from "../../assets/empty-box.svg";
import s from './styles.module.scss';

export const NotContractFound = () => {

    return (
        <div className={s.wrapper}>
            <BoxSvg />
            <h2>У вас ещё нет смарт-контрактов</h2>
            <p>Чтобы начать, создайте свой первый смарт-контракт</p>
            <CreateContractButton />
        </div>
    )
}