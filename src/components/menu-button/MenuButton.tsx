import { Button } from "../../ui/button/Button";
import { ReactComponent as MenuSvg } from "../../assets/icons/menu.svg"

export const MenuButton = () => {
    const handleMenuClick = () => {

    }
    return (
        <Button extraClass="menu_btn" action={handleMenuClick}>
            <MenuSvg />
            <span>Меню</span>
        </Button>
    )
}