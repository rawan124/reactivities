import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import ActivityForm from "../features/activities/form/ActivityForm";
import HomePage from "../features/home/HomePage";
import ActivityDetailPage from "../features/activities/details/ActivityDetailPage";
import ActivityDashBoard from "../features/activities/dashboard/ActivityDashBoard";
export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {path:'', element: <HomePage/>},
            {path:'activities', element:<ActivityDashBoard/>},
            {path:'activities/:id', element:<ActivityDetailPage/>},
            {path:'createActivity', element:<ActivityForm key='create'/>},
            {path:'manage/:id', element:<ActivityForm/>}
        ]

    }
]);
