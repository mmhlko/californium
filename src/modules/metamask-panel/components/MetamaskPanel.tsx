import s from './styles.module.scss';
import metamask from "../images/metamask.png"
import { handleConnectMetamask } from '../../../utils/handleConnectMetamask';
import { ReactComponent as MetamaskArrowSvg } from "../images/metamask-arrow.svg"
import classNames from 'classnames';

export const MetamaskPanel = () => {

    return (
        <div className={classNames(s.metamask_panel_wrapper, "container")}>
            <img src={metamask} alt="metamask_image" />
            <span className={s.subtitle}>Это безопасно для ваших данных</span>
            <button onClick={handleConnectMetamask} className={s.connect_btn}>
                <span>Подключить</span>
                <MetamaskArrowSvg />
            </button>
        </div>
    )
}