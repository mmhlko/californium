import { ContentHeader } from '../../../components/content-header/ContentHeader';
import { Button } from '../../../ui/button/Button';
import s from './styles.module.scss';
import { CryptoFormInputs } from './crypto-form-inputs/CryptoFormInputs';
import { useAppSelector } from '../../../storage/hookTypes';
import { FormEvent, memo, useRef, useState, useEffect } from 'react';
import { InputType, InputVariety } from '../types/types';
import { contractInputsData } from '../constants/contractInputsData';
import { useDispatch } from 'react-redux';
import { resetFormAction } from '../../../storage/payment-form/paymentFormReducer';
import { ContractTypes } from '../../../utils/contractTypes';
import { paymentSwitcher } from '../helpers/paymentSwitcher';

export type TPaymentInput = {
    title: string,
    placeHolder: string,
    type: InputType,
    wide: boolean,
    variety?: InputVariety,
    alone: boolean,
    name: string
}

export const Payment = memo(() => {
    const contractTypelabel = useAppSelector(state => state.contract.contractType?.label);
    const contractTypeValue = useAppSelector(state => state.contract.contractType?.value);
    const walletNumber = useAppSelector(state => state.wallet.walletNumber)
    const paymentForm = useAppSelector(state => state.paymentForm.data)
    const [errorMessage, setErrorMessage] = useState<string>();
    const dispatch = useDispatch();
    const formRef = useRef<HTMLFormElement>(null);

    const onPaymentSubmit = (e:FormEvent) => {
        e.preventDefault();
        const paymentData = {...paymentForm, walletNumber}
        paymentSwitcher(contractTypeValue, paymentData)    
    }

    const returnCryptoFormInputs = () => {
        let error = '';
        for (const key in ContractTypes) {
            switch (contractTypeValue) {
                case ContractTypes[key]: {
                    error = '';
                    return <CryptoFormInputs inputList={contractInputsData[ContractTypes[key]]} />
                }
                default:
                    error = "Модуль в разработке"
                    break;
            }
        }
        setErrorMessage(error)
    }

    useEffect(() => {
        dispatch(resetFormAction())
    }, [contractTypeValue])

    return (
        <section className={s.wrapper}>
            <ContentHeader title={contractTypelabel}>
                <span className="step">{"ШАГ (4 / 4)"}</span>
            </ContentHeader>
            <form className={s.form} ref={formRef} onSubmit={onPaymentSubmit}>
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
})