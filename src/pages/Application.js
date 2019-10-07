import React from "react";
import Table from "../components/Table";
import Tabs from "../components/tab/Tabs";
import Wallet from "./customer/Wallet";
import Account from "./customer/account";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Select from "../components/Select";



const data = [
    {
        key: '1',
        appID: '000-9090',
        partner: 'CBC bank ',
        transactionNumber: 12090,
        transactionValue: "700,000,000",

    },
    {
        key: '2',
        appID: '000-9090',
        partner: 'CBC bank ',
        transactionNumber: 12090,
        transactionValue: "700,000,000",
    },
    {
        key: '3',
        appID: '000-9090',
        partner: 'CBC bank ',
        transactionNumber: 12090,
        transactionValue: "700,000,000",

    },
    {
        key: '4',
        appID: '000-9090',
        partner: 'CBC bank ',
        transactionNumber: 12090,
        transactionValue: "700,000,000",

    },
];

const columns = [
    {
        dataIndex: "appID",
        title: "App ID",

    },
    {
        dataIndex: "partner",
        title: "Partner",

    },{
        dataIndex: "transactionNumber",
        title: "Transaction Number",

    }, {
        dataIndex: "transactionValue",
        title: "Value",

    }

];

const Application = (props) => (

    <div className="container">
        <div className={"justify-content-between d-flex margin-bottom-30"}>
            <div className={"fw-500"}>Number of Agents: <span className={"fs-28"}>10000</span></div>
            <button type="button" className="btn btn-primary" data-toggle="modal"
                    data-target=".bd-example-modal-lg">Create App
            </button>
        </div>
        <Table columns={columns} data={data}/>
        <Modal modalTitle={"Create a Agents"}>
            <div className={" d-flex flex-column margin-bottom-30 justify-content-center align-items-center"}>
                <form method={"post"} className={"md-7"}>
                    <div>
                        <label htmlFor={"contact"} className={"margin-top-15"}>Partner ID</label>
                        <Input className={""} type={"text"} value={"909-09823776"} readOnly={true} onChange={() => {
                            console.log("changed")
                        }} name={"name"} id={"contact"}/>
                    </div>
                    <div>
                        <label for={"email"} className={"margin-top-15"}>App Name</label>
                        <Input className={""} type={"text"} value={""} onChange={() => {
                            console.log("changed")
                        }} name={"name"} id={"email"}/>
                    </div>

                    <button className={"primary-button margin-top-30"}>Create App</button>
                </form>
            </div>
        </Modal>
    </div>
);

export default Application;