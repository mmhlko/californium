import { Link } from "react-router-dom";
import { routePath } from "../../app/providers/AppRouter";
import { ReactComponent as LongArrow } from "../../assets/icons/long-arrow.svg";
import s from './styles.module.scss';

export const ButtonBack = () => {

    return (
        <Link to={routePath.home} className={s.button_back}>
            <LongArrow />
            Обратно на главную страницу
        </Link>
    )
}