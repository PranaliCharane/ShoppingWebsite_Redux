import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";
import NavBar from "./NavBarPanel";


const RootLayout = () => {
    return(
       <>
        <NavBar/>
        <main >
            <Outlet />
        </main>
       </>

    )
}

export default RootLayout;