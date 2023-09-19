import { Link } from "react-router-dom";
import s from "./styles.module.scss";
import { routePath } from "../../../../app/providers/AppRouter";
import classNames from "classnames";

export const Footer = () => {
    return(
        <footer className={classNames(s.footer, "container")}>
            <nav className={s.navigation}>
                <ul className={s.list}>
                <li className={s.link}><Link to={routePath.metamask}>Metamask</Link></li>
                    <li className={s.link}><Link to={routePath.home}>Главная страница</Link></li>
                    <li className={s.link}><Link to={"#"}>Политика конфенденциальности</Link></li>
                    <li className={s.link}><Link to={"#"}>Договор оферты</Link></li>
                    <li className={s.link}><Link to={"#"}>Написать нам</Link></li>
                </ul>
            </nav>
            <span>© Californium 2023</span>
        </footer>
    )
}