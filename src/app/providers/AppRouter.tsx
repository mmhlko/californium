import {Routes, Route} from "react-router-dom";
import HomePage from "../../pages/home-page/HomePage";
import CreateContractPage from "../../pages/create-contract-page/CreateContractPage";
import NotFoundPage from "../../pages/not-found-page/NotFoundPage";
import MetamaskPage from "../../pages/metamask-page/MetamaskPage";

export const routePath = {
    home: "/",
    createСontract: "/create-contract",
    metamask: "/auth",
    notFound: "*"
}

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path={routePath.metamask} element={<MetamaskPage/>}/>
                <Route path={routePath.home} element={<HomePage/>}/>
                <Route path={routePath.createСontract} element={<CreateContractPage/>}/>
                <Route path={routePath.notFound} element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}

export default AppRouter