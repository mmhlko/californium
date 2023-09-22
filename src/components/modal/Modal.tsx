import classNames from 'classnames';
import { Button } from '../../ui/button/Button';
import s from './styles.module.scss';
import { Dispatch, MouseEvent } from "react"

type TModalProps = {
    text: string,
    buttonText: string
    action: () => void,
    isOpened: boolean,
    setOpenModal: Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({ text, buttonText, isOpened, action, setOpenModal }: TModalProps) => {

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleClickModalBody = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    return (
        <div className={classNames(s.modal, { [s.modal_hidden]: !isOpened })} onMouseDown={handleCloseModal}>
            <div className={s.modal_wrapper} onMouseDown={handleClickModalBody}>
                <h2 className={s.text}>{text}</h2>
                <Button action={action}>{buttonText}</Button>
                <span onClick={handleCloseModal}>x</span>
            </div>
        </div>
    )
}