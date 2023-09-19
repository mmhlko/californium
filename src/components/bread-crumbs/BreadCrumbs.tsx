import { Link } from "react-router-dom"
import { routePath } from "../../app/providers/AppRouter"
import s from './styles.module.scss';

type TBreadCrumbsProps = {
    title: string,
    url: string,
    sepatator: string
}

export const BreadCrumbs = ({title, url, sepatator}:TBreadCrumbsProps) => {
    return (
        <nav className={s.navigation}>
            <ul>
                <li>
                    <Link to={routePath.home}>Главная страница</Link>
                </li>
                <span className={s.sepatator}>{sepatator}</span>
                <li>
                    <Link to={url}>{title}</Link>
                </li>
            </ul>
        </nav>
    )
}