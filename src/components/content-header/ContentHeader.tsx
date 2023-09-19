import { Link, To } from 'react-router-dom';
import { ReactNode } from 'react';
import s from './styles.module.scss';
const PREV_PAGE = -1;

interface IContentHeaderProps {
    title: string,
    children?: ReactNode,
    to?: string,
    textButton?: string,    
}

export function ContentHeader({ title, children, to, textButton }: IContentHeaderProps) {

    return (
        <div className={s.wrapper}>
            {/* <a href="#" className={s.buttonBack} onClick={() => navigate(to || -1)}>{textButton}</a> */}

            {textButton && <Link to={to || PREV_PAGE as To} className={s.buttonBack}>{textButton}</Link>}
            <h1 className={s.title}>{title}</h1>
            {children}
        </div>

    )
}