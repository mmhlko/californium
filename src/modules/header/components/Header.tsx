import { Button } from "../../../ui/button/Button";
import s from "./styles.module.scss";
import classnames from "classnames";
import ContractLogoSvg from "../assets/conract-logo.svg";
import logoSmall from "../assets/logo_small.svg";
import CaliforniumLogo from "../assets/Californium.svg";
import { ReactComponent as LogoutIcon } from "../assets/logount-icon.svg";
import { Link, useLocation } from "react-router-dom";
import { routePath } from "../../../app/providers/AppRouter";
import { useAppSelector } from "../../../storage/hookTypes";
import { ConnectButton } from "./connect-button/ConnectButton";
import { LanguageButton } from "./lang-button/LanguageButton";
import { useMediaQueries } from "../../../hooks/useMediaQuery";

export const Header = () => {
    const { xs, sm } = useMediaQueries();
    const ownerWallet = useAppSelector(state => state.wallet.walletNumber);
    const handleLogout = () => {
    }
    const cutWalletString = (wallet: string) => {
        if (wallet.length > 15) {
            return `${wallet}`.split("").slice(0, 6).join('') + "..." + `${wallet}`.split("").splice(wallet.length - 4).join('')
        } else return `${wallet}`
    }
    const location = useLocation();

    cutWalletString(ownerWallet)

    return (
        <header className={classnames("container", s.header)}>
            <div className={s.header_wrapper}>
                <Link to={routePath.home}>
                    <div className={s.logo_wrapper}>
                        <img className={s.logo_small} src={logoSmall} alt="logo-small" />
                        {location.pathname === routePath.metamask
                            ? (!xs && !sm && <img className={s.logo_big} src={CaliforniumLogo} alt="logo-small" />)
                            : <img className={s.logo_big} src={CaliforniumLogo} alt="logo-small" />
                        }
                    </div>
                </Link>
                <div className={s.buttons}>
                    {location.pathname !== routePath.metamask &&
                        <>
                            <Button extraClass="contract_btn">
                                <img src={ContractLogoSvg} alt="contact-logo" />
                                <span>{cutWalletString(ownerWallet)}</span>
                            </Button>
                            <Button extraClass="logout_btn" action={handleLogout}>
                                <LogoutIcon />
                                <span>Выйти</span>
                            </Button>
                        </>}
                    <LanguageButton />
                    <ConnectButton />
                </div>
            </div>
        </header>
    );
}

