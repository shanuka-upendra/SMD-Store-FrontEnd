import { Routes } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';
import { Customer } from './page/customer/customer';
import { Item } from './page/item/item';
import { Order } from './page/order/order';
import { Login } from './page/login/login';
import { DashboardHome } from './page/dashboard-home/dashboard-home';
import { Home } from './page/home/home';

export const routes: Routes = [
    {
        path:"dashboard",
        component:Dashboard,
        children:[
            {
                path:"",
                component:DashboardHome
            },
            {
                path:"customer",
                component:Customer
            },
            {
                path:"item",
                component:Item
            },
            {
                path:"order",
                component:Order
            }
        ]
    },
    {
        path:"login",
        component:Login
    },
    {
        path:"",
        component:Home,
    }
];
