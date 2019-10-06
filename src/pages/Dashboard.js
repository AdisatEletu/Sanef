import React from "react";
import "./dasboard/verification.css"
import SdkAnalytics from "./dasboard/sdkAnalytics";
import AppAnalytics from "./dasboard/appAnalytics";
import TopPartner from "./dasboard/topPartner";
import TopAgent from "./dasboard/topAgent";


const Dashboard = () => (
    <div className={"container"}>
        <div className=" d-flex flex-column fullwidth">
            <div className={"d-flex flex-column fullwidth margin-bottom-50"}>
                <span className={'fs-28 fw-500 margin-bottom-30'}>SDK Analytics</span>
                <SdkAnalytics/>
            </div>
            <div className={"d-flex flex-column fullwidth margin-bottom-50"}>
                <span className={'fs-28 fw-500 margin-bottom-30'}>APP Analytics</span>
                <AppAnalytics/>
            </div>
            <div className={"d-flex"}>
                <div className={"md-5 "}>
                    <div className={"fs-28 fw-500 margin-bottom-30"}>Top Performing Partners</div>
                    <TopPartner/>
                </div>
                <div className={"md-5 "}>
                    <div className={"fs-28 fw-500 margin-bottom-30"}>Top Performing Agents</div>
                    <TopAgent/>
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;
