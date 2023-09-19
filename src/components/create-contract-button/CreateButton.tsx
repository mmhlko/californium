import { Link } from 'react-router-dom';
import { Button } from '../../ui/button/Button';
import { routePath } from '../../app/providers/AppRouter';
import classNames from 'classnames';
import s from './styles.module.scss';

type TCreateContractButton = {
    minimised?: boolean
}
export const CreateContractButton = ({minimised}:TCreateContractButton) => {

    const handleClick = () => {
        console.log('handleClick');        
    }

    return (
        <Link to={routePath.createСontract} onClick={handleClick}>
            <Button plus>
                <span className={classNames({[s.button_text]: !!minimised})}>Создать контракт</span>
            </Button>
        </Link>        
    )
}