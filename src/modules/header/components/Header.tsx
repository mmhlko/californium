import s from "./styles.module.scss";
import classnames from "classnames";
import { useLocation } from "react-router-dom";
import { routePath } from "../../../app/providers/AppRouter";
import { ConnectButton } from "./connect-button/ConnectButton";
import { LanguageButton } from "./lang-button/LanguageButton";
import { useMediaQueries } from "../../../hooks/useMediaQuery";
import { MenuButton } from "../../../components/menu-button/MenuButton";
import { Logo } from "./logo/Logo";
import { LogoutButton } from "./logout-button/LogoutButton";
import { OwnerButton } from "./owner-button/OwnerButton";

export const Header = () => {
    const { sm } = useMediaQueries();
    const location = useLocation();

    return (
        <header className={classnames("container", s.header)}>
            <div className={s.header_wrapper}>
                <Logo />
                <div className={s.buttons}>
                    {location.pathname !== routePath.metamask
                        ? <>
                            {!sm
                                ? <>
                                    <OwnerButton />
                                    <LogoutButton />
                                    <LanguageButton />
                                </>
                                : <MenuButton />
                            }
                        </>
                        : <LanguageButton />
                    }
                    <ConnectButton />
                </div>
            </div>
        </header>
    );
}

