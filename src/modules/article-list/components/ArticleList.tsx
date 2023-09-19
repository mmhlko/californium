import s from './styles.module.scss';
import piture_01 from "../../../assets/images/picture_01.png";
import piture_02 from "../../../assets/images/picture_02.png";
import { Article } from '../../../components/article/Article';
import { ContentHeader } from '../../../components/content-header/ContentHeader';


const ARTICLES = {
    article_01: {
        id: 1,
        title: "Создать контракт",
        content: "Текст смарт-контракта криптографически подписывается сторонами сделки и запускается на исполнение на доверенной платформе. Смарт-контракт контролирует условия договора и, при выполнении условий, исполняет его обязательства.",
        picture: piture_01,
        textButton: "+  Создать смарт-контракт",
        disbled: false
    },
    article_02: {
        id: 2,
        title: "Проект под ключ",
        content: "Находится в разработке и на данный момент недоступно",
        picture: piture_02,
        textButton: "Скоро...",
        disbled: true
    }
}

type ArticleListProps = {
    setStep: React.Dispatch<React.SetStateAction<string>>
}

export const ArticleList = ({setStep}: ArticleListProps) => {

    return (
        <section className={s.wrapper}>
            <ContentHeader title="Создать контракт">
                <span className="step">{"ШАГ (1 / 4)"}</span>
            </ContentHeader>
            <div className={s.articles}>
                <Article
                    id={ARTICLES.article_01.id}
                    title={ARTICLES.article_01.title}
                    content={ARTICLES.article_01.content}
                    textButton={ARTICLES.article_01.textButton}
                    picture={ARTICLES.article_01.picture}
                    action={setStep}
                    disabled={ARTICLES.article_01.disbled}
                />
                <Article
                    id={ARTICLES.article_02.id}
                    title={ARTICLES.article_02.title}
                    content={ARTICLES.article_02.content}
                    textButton={ARTICLES.article_02.textButton}
                    picture={ARTICLES.article_02.picture}
                    disabled={ARTICLES.article_02.disbled}
                />
            </div>
        </section>
    )
}