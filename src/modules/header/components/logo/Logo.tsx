import { Link } from "react-router-dom";
import s from "./styles.module.scss";
import { routePath } from "../../../../app/providers/AppRouter";
import logoSmall from "../../assets/logo_small.svg";
import CaliforniumLogo from "../../assets/Californium.svg";
import { useMediaQueries } from "../../../../hooks/useMediaQuery";


export const Logo = () => {
    const { xs, sm } = useMediaQueries();

    return (
        <Link to={routePath.home}>
            <div className={s.logo_wrapper}>
                <img className={s.logo_small} src={logoSmall} alt="logo-small" />
                {location.pathname === routePath.metamask
                    ? (!xs && !sm && <img className={s.logo_big} src={CaliforniumLogo} alt="logo-small" />)
                    : <img className={s.logo_big} src={CaliforniumLogo} alt="logo-small" />
                }
            </div>
        </Link>
    )
}