import { Link } from 'react-router-dom';
import { Button } from '../../ui/button/Button';
import { routePath } from '../../app/providers/AppRouter';

export const CreateContractButton = () => {

    const handleClick = () => {
        console.log('handleClick');        
    }

    return (
        <Link to={routePath.createСontract} onClick={handleClick}>
            <Button plus>Создать контракт</Button>
        </Link>        
    )
}