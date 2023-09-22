import { ArticleList } from "../../modules/article-list";
import s from './styles.module.scss';
import { useState, useEffect } from "react";
import { ContractTypeList } from "../../modules/contract-type-list/components/ContractTypeList";
import { WebList } from "../../modules/web-list/components/WebList";
import { Payment } from "../../modules/payment";
import { Button } from "../../ui/button/Button";
import { BreadCrumbs } from "../../components/bread-crumbs/BreadCrumbs";
import { routePath } from "../../app/providers/AppRouter";
import { Modal } from "../../components/modal/Modal";


const CreateContractPage = () => {

    const [step, setStep] = useState<string>('1');

    const RenderStep1 = () => {
        return <ArticleList setStep={setStep}/>
    }

    const RenderStep2 = () => {
        return (
            <>               
                <ContractTypeList/>
                <WebList />
                <div className={s.next_step}>
                    <Button action={() => setStep("3")} arrow>
                        Следующий этап
                    </Button>
                </div>
            </>
        )
    }

    const RenderStep3 = () => {
        return (
            <>
                <Payment />
            </>
        )
    }

    const renderSwitch = () => {
        switch (step) {
            case '1':
                return <RenderStep1 />
            case '2':
                return <RenderStep2 />
            case '3':
                return <RenderStep3 />
            default:
                break;
        }
    }

    useEffect(()=>{
        window.scrollTo({top: 0});
    },[renderSwitch])

    return (
        <>  
            <BreadCrumbs title="Создать контракт" url={routePath.createСontract} sepatator="/"/>            
            {renderSwitch()}
        </>
    )
}

export default CreateContractPage;