import { Button } from '../../ui/button/Button';
import s from './styles.module.scss';
import { ReactComponent as LokedIcon } from "./assets/material-symbols_lock.svg"

type ArticleProps = {
    id: number,
    title: string,
    content: string,
    picture: string,
    textButton: string,
    extraclass?: string,
    action?: React.Dispatch<React.SetStateAction<string>>,
    disabled?: boolean
}

const idToString = (id: number) => {
    return id < 10 ? `0${id}` : id.toString()
}

export function Article({ id, title, content, picture, textButton, extraclass = '', action, disabled=false }: ArticleProps) {

    const handleClick = () => {
        action && action("2")
    }

    return (
        <article className={s.wrapper} style={{ backgroundImage: `url(${picture})` }}>
            <div className={s.backgroundBlur}>
                <span className={s.article_number}>{idToString(id)} {"(Powered AI)"}</span>
                <h3 className={s.title}>
                    {title}
                    {disabled && <LokedIcon/>}
                </h3>
                <p className={s.content}>{content}</p>
                <Button 
                    action={handleClick} 
                    extraClass={extraclass || ''} 
                    disabled={disabled}
                >                        
                    {textButton}
                </Button>
            </div>
        </article>
    )
}