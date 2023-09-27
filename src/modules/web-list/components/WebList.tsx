import { ContentHeader } from "../../../components/content-header/ContentHeader";
import { ItemList } from "../../../components/item-list";
import { ListType } from "../../../components/item-list/components/ItemList";
import { WEB_TYPES } from "../constants/webTypes";
import s from './styles.module.scss';

export const WebList = () => {

    return (
        <section className={s.web_list_wrapper}>
            <ContentHeader title="Выберите сеть">
                <span className="step">{"ШАГ (3 / 4)"}</span>
            </ContentHeader>
            <ItemList type={ListType.web} list={WEB_TYPES} />
        </section>
    )
}