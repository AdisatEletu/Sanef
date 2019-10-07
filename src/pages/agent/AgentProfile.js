import React from "react";

export default class AgentProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <div className={"md-10 d-flex flex-column justify-content-center margin-bottom-50 margin-top-30 align-items-center"}>
                    <img src={require("../../assets/profile.jpeg")} width={"120px"} height={"120px"}
                         className={"profile-photo"}
                         alt={"agent's photo"}/>
                    <div className={"fs-18 fw-500"}>Moronke Brown</div>
                    <div className={"fs-18 "}>ID: 9090-56898</div>
                    <div className={" "}>Phone: +234 707 880 6841</div>
                    <div className={""}>House 2, 800 road, Festurn</div>
                    <div className={"d-flex margin-top-50 md-7 "}>
                        <div className={"md-5 "}>
                            <div className={"s-analytics-box1 d-flex flex-column justify-content-center align-items-center"}>
                                <div className={"fw-500 grey"}> Number of Transactions</div>
                                <div className={"fw-500 fs-18"}> 3,000</div>
                            </div>
                        </div>
                        <div className={"md-5"}>
                            <div className={"s-analytics-box6 d-flex flex-column justify-content-center align-items-center"}>
                                <div className={"fw-500 grey"}> Value of Transaction</div>
                                <div className={"fw-500 fs-18"}> 2,000,000,000</div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
