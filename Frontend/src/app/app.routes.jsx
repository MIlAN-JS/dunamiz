import {createBrowserRouter} from "react-router-dom"
import App from "./App.jsx"
import LoginPage from "../features/auth/ui/pages/LoginPage.jsx"
import Notfound from "../features/Notfound/ui/Notfound.jsx"
import SetupPage from "../features/setup/ui/pages/SetupPage.jsx"  
import MatchDetails from "../features/match/ui/pages/MatchDets.jsx"
import MatchFeed from "../features/match/ui/pages/MatchFeed.jsx"
const router = createBrowserRouter([
    {
        path: "/", 
        element : <App/>,
        children: [
             {
                path: "/match-feed", 
                element : <MatchFeed/>
                
             },
            {
                path : "match-details", 
                element: <MatchDetails/>
            }
        ]
    }, 
    {
        path: "/login", 
        element : <LoginPage/>
    }, 
    {
        path : "*", 
        element : <Notfound/>
    }, 
    {
        path: "/user-setup", 
        element : <SetupPage/>
    }

])

export default router;