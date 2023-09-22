import { Link, useLocation } from "react-router-dom";
import s from "./styles.module.scss";
import { routePath } from "../../../../app/providers/AppRouter";
import logoSmall from "../../assets/logo_small.svg";
import CaliforniumLogo from "../../assets/Californium.svg";
import { useMediaQueries } from "../../../../hooks/useMediaQuery";
import classNames from "classnames";


export const Logo = () => {
    const { xs, sm } = useMediaQueries();
    const location = useLocation();

    return (
        <Link to={routePath.home} className={s.logo_link}>
            <div className={s.logo_wrapper}>
                <img className={classNames(s.logo_small, {[s.logo_small_metamask]: xs})} src={logoSmall} alt="logo-small" />
                {location.pathname === routePath.metamask
                    ? (!sm && <img className={s.logo_big} src={CaliforniumLogo} alt="logo-big" />)
                    : <img className={s.logo_big} src={CaliforniumLogo} alt="logo-small" />
                }
            </div>
        </Link>
    )
}