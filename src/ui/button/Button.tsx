import { MouseEvent, ReactNode } from "react";
import classNames from "classnames";
import s from './styles.module.scss';
import { ReactComponent as LongArrow } from "../../assets/icons/long-arrow.svg"

type TButtonProps = {
    children: ReactNode,
    action?: () => void,
    htmlType?: "button" | "submit" | "reset",
    extraClass?: string,
    href?: string,
    disabled?: boolean,
    arrow?: boolean,
    plus?: boolean 
}

export const Button = ({ children, htmlType="button", action, extraClass, href, disabled=false, arrow, plus }: TButtonProps) => {

    const onclick = (e: MouseEvent<HTMLButtonElement>) => {
        href && e.preventDefault();
        action && action();
    }

    return (
        <button
            disabled={disabled}
            type={htmlType}
            onClick={onclick}
            className={classNames(s.button, extraClass && [s[extraClass]])}
        >
            {plus && <span>+</span>}
            {children}
            {arrow && <LongArrow className={s.arrow_next} />}
        </button>
    )
}