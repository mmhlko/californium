
import { ButtonBack } from '../../components/button-back/ButtonBack';
import { MetamaskPanel } from '../../modules/metamask-panel';
import s from './styles.module.scss';
 
const MetamaskPage = () => {

    return (
        <>
        <section className={s.metamask_section}>
            <h1>Для начала работы c Californium подключите криптокошелек</h1>
            <MetamaskPanel />
            <ButtonBack />
        </section>        
        </>
        
    )
}

export default MetamaskPage;