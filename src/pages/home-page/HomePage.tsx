import { useEffect } from "react";
import { ContentHeader } from "../../components/content-header/ContentHeader";
import { CreateContractButton } from "../../components/create-contract-button/CreateButton";
import { ContractTable } from "../../modules/contract-table";

const HomePage = () => {

    useEffect(()=>{
        window.scrollTo({top: 0});
    },[])

    return (
        <>
            <ContentHeader title="Смарт-контракты">
                <CreateContractButton minimised/>
            </ContentHeader>
            <ContractTable />
        </>
    )
}

export default HomePage;