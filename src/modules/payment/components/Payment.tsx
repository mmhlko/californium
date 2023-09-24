import { ContentHeader } from '../../../components/content-header/ContentHeader';
import { Button } from '../../../ui/button/Button';
import s from './styles.module.scss';
import { CryptoFormInputs } from './crypto-form-inputs/CryptoFormInputs';
import { useAppSelector } from '../../../storage/hookTypes';
import { FormEvent, useState } from 'react';
import { ContractTypes, InputType, InputVariety } from '../types/types';
import { contractInputsData } from '../constants/contractInputsData';

export type TPaymentInput = {
    title: string,
    placeHolder: string,
    type: InputType,
    wide: boolean,
    variety?: InputVariety,
    alone: boolean
}

export const Payment = () => {

    const contractTypelabel = useAppSelector(state => state.contract.contractType?.label);
    const contractTypeValue = useAppSelector(state => state.contract.contractType?.value);
    const [errorMessage, setErrorMessage] = useState<string>();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    const returnCryptoFormInputs = () => {  
        let error = '';        
        for (let key in ContractTypes) {            
            switch (contractTypeValue) {
                case ContractTypes[key]: {
                    error = ''
                    return <CryptoFormInputs inputList={contractInputsData[ContractTypes[key]]} />
                }                    
                default:
                    error = "Модуль в разработке"
                    break;
            }
        }
        setErrorMessage(error)
    }

    return (
        <section className={s.wrapper}>
            <ContentHeader title={contractTypelabel}>
                <span className="step">{"ШАГ (4 / 4)"}</span>
            </ContentHeader>
            <form className={s.form} onSubmit={handleSubmit}>
                {errorMessage ? errorMessage : returnCryptoFormInputs()}
                {!errorMessage &&
                    <div className={s.payment_wrapper}>
                        <span className={s.chain_label}>Mainnet</span>
                        <div className={s.payment_content}>
                            <span className={s.payment_title}>Total amount</span>
                            <span className={s.payment_cost}>= 1.99$</span>
                            <Button htmlType='submit' arrow>Перейти к оплате</Button>
                        </div>
                    </div>}
            </form>
        </section>
    )
}