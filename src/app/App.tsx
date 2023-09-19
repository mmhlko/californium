import { useLocation } from "react-router-dom";
import { MetamaskBackGround } from "../components/metamask-background/MetamaskBackGround";
import { Footer } from "../modules/footer";
import { Header } from "../modules/header";
import AppRouter, { routePath } from "./providers/AppRouter";

const App = () => {
    const location = useLocation();    
    const metamaskBg = location.pathname === routePath.metamask
    return (
        <>
            <Header />
            <main className="container">
                <AppRouter />
            </main>
            <Footer />
            {metamaskBg && <MetamaskBackGround />}
        </>
    )
}

export default App;