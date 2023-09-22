import { Button } from "../../../../ui/button/Button";
import { ReactComponent as LogoutIcon } from "../../assets/logount-icon.svg";

export const LogoutButton = () => {

    const handleLogout = () => {
    }
    
    return (
        <Button extraClass="logout_btn" action={handleLogout}>
            <LogoutIcon />
            <span>Выйти</span>
        </Button>
    )
}