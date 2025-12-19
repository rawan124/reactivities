import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import ActivityForm from "../features/activities/form/ActivityForm";
import ActivityDashBoard from "../features/activities/dashboard/ActivityDashBoard";
import HomePage from "../features/home/HomePage";
export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {path:'', element: <HomePage/>},
            {path:'activities', element:<ActivityDashBoard/>},
            {path:'createActivity', element:<ActivityForm/>}
        ]

    }
]);
