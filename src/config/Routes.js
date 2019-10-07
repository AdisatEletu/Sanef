import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {PageLoader} from "../components/Loaders";
import AuthRoute from "../layouts/AuthRoute";
import PublicRoute from "../layouts/PublicRoute";
import {AlertWrapper} from "../components/alert/AlertComponent";
import DashboardLayout from "../layouts/DashboardLayout";

// create Loadable pages
const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("../pages/auth/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Customer = lazy(() => import("../pages/Customer"));
const Application = lazy(() => import("../pages/Application"));
const Partners = lazy(() => import("../pages/partners/Partners"));
const Agents = lazy(() => import("../pages/Agents"));
const User = lazy(() => import("../pages/UserManagement"));

const Routes = () => (
    <Router>
        <Suspense fallback={<PageLoader/>}>
            <AlertWrapper ref={alertRef => (window.alertRef = alertRef)}/>
            <Switch>
                {/* can't access them when you are logged in */}
                <AuthRoute exact path="/login" component={Login}/>
                <AuthRoute exact path="/" component={Login}/>
                <DashboardLayout>
                    {/* can only access them when you are logged in */}
                    <PublicRoute exact path="/home" component={Home}/>

                    {/* public route: accessible to both !!authenticated users */}
                    <PublicRoute exact path="/dashboard" component={Dashboard}/>
                    <PublicRoute exact path="/applications" component={Application}/>
                    <PublicRoute exact path="/customers" component={Customer}/>
                    <PublicRoute exact path="/partners" component={Partners}/>
                    <PublicRoute exact path="/agents" component={Agents}/>
                    <PublicRoute exact path="/users" component={User}/>
                </DashboardLayout>
            </Switch>
        </Suspense>
    </Router>
);

export default Routes;
