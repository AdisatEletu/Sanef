import React from "react";
import Select from "../../components/Select";


const SdkAnalytics = () => (
    <div className=" d-flex align-items-center justify-content-center">

        <div className={"md-4"}>
            <div className={"s-analytics-box1 fullwidth d-flex align-items-center justify-content-center "}>
                <div className={"fw-500 fs-18 d-flex justify-content-center align-items-center md-3"}>
                    <img src={require("../../assets/wallet.png")} width={"64px"} alt={"account"}/>

                </div>
                <div className={" md-7  d-flex flex-column"}>
                    <div className={"padding-5"}>
                        <div className={"fw-500 black-color"}>2,004</div>
                        <div className={"fw-500 green-color"}> Number of Accounts</div>

                    </div>
                    <div className={"border-top"}>
                        <div className={"fw-500 black-color"}>
                            2,004
                        </div>
                        <div className={"fw-500 green-color"}>
                            Number of Wallets
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div className={"md-5"}>
            <div className={"s-analytics-box1 fullwidth d-flex align-items-center justify-content-center "}>
                <div className={"fw-500 fs-18 d-flex justify-content-center align-items-center md-3"}>
                    <img src={require("../../assets/value.png")} width={"64px"} alt={"account"}/>

                </div>
                <div className={" md-7  d-flex flex-column"}>
                    <div className={"padding-5"}>
                        <div className={"fw-500 black-color"}>2,004</div>
                        <div className={"fw-500 green-color"}> Number of Agents</div>

                    </div>
                    <div className={"border-top"}>
                        <div className={"fw-500 black-color"}>
                            2,004
                        </div>
                        <div className={"fw-500 green-color"}>
                            Number of Partners
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div className={"md-5"}>
            <div className={"s-analytics-box1 fullwidth d-flex align-items-center justify-content-center "}>
                <div className={"fw-500 fs-18 d-flex justify-content-center align-items-center md-3"}>
                    <img src={require("../../assets/ui.png")} width={"64px"} alt={"account"}/>

                </div>
                <div className={" md-7  d-flex flex-column"}>
                    <div className={"padding-5"}>
                        <div className={"fw-500 black-color"}>2,004</div>
                        <div className={"fw-500 green-color"}> Number of Apps</div>

                    </div>
                    <div className={"border-top"}>
                        <div className={"fw-500 black-color"}>
                            2,004
                        </div>
                        <div className={"fw-500 green-color"}>
                            Transactions Value
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
);

export default SdkAnalytics;
