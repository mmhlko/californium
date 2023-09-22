import { useLocation } from "react-router-dom";
import { Footer } from "../modules/footer";
import { Header } from "../modules/header";
import AppRouter, { routePath } from "./providers/AppRouter";
import { useEffect } from "react";
import { root } from "../main";

const App = () => {

    const location = useLocation();

    useEffect(() => {
        window.scroll({top: 0})
        location.pathname === routePath.metamask ? root?.classList.add("metamask") : root?.classList.remove("metamask")
    }, [location.pathname])

    return (
        <>
            <Header />
            <main className="container">
                <AppRouter />
            </main>
            <Footer />
            {/* {metamaskBg && <MetamaskBackGround />} */}
        </>
    )
}

export default App;