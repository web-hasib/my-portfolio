import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ProjectDetails from "../Components/Projects/ProjectDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/projects/:id',
                Component:ProjectDetails,
                loader:()=>fetch('/project.json')
                
            }
        ]
    }
])