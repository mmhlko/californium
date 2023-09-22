import { Link, useNavigate } from "react-router-dom"
import { routePath } from "../../app/providers/AppRouter"
import s from './styles.module.scss';
import { Modal } from "../modal/Modal";
import { MouseEvent, useState } from "react"

type TBreadCrumbsProps = {
    title: string,
    url: string,
    sepatator: string
}

export const BreadCrumbs = ({title, url, sepatator}:TBreadCrumbsProps) => {

    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false)

    const leaveAcceptClick = () => {
        navigate(routePath.home)
    }

    const handleLeavePage = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setOpenModal(!openModal)
    }

    return (
        <nav className={s.navigation}>
            <ul>
                <li>
                    <Link to={routePath.home} onClick={handleLeavePage}>Главная страница</Link>
                </li>
                <span className={s.sepatator}>{sepatator}</span>
                <li>
                    <Link to={url}>{title}</Link>
                </li>
            </ul>
            <Modal text="Точно хотите уйти?" buttonText="Да!" action={leaveAcceptClick} isOpened={openModal} setOpenModal={setOpenModal}/>
        </nav>
    )
}