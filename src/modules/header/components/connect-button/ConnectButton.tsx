import { Link, useLocation } from "react-router-dom";
import { routePath } from "../../../../app/providers/AppRouter";
import { handleConnectMetamask } from "../../../../utils/handleConnectMetamask";
import { Button } from "../../../../ui/button/Button";
import { ReactComponent as ConnectArrow } from "../../assets/connect-arrow.svg";

export const ConnectButton = () => {
    const location = useLocation();
    return (
        <>
            {location.pathname === routePath.metamask &&
                <Link to={routePath.home}>
                    <Button action={handleConnectMetamask} extraClass="connect_btn">
                        <span>Подключить</span>
                        <ConnectArrow />
                    </Button>
                </Link>
            }
        </>
    )
}