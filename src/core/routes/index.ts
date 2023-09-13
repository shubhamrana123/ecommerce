import { FC } from "react"
import Login from "../../container/screen/auth/Login"

interface Route {
key:string,
title:string,
path:string,
component: FC,
navigatePath?:any
}
export const authLayoutRoute :Array<Route> =[
    {
        key:'loginScreen-route',
        title:'login-screen',
        path:'/',
        component:Login,
     


    }
]