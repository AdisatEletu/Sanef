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
        firstName: "Maurine",
        lastName: "Newton",
        role: "user",
        email: "m.newton@gmail.com",
        status: "deactivated",
        transactionValue: "700,000,000"

    },
    {
        key: '2',
        appID: '000-9090',
        role: "user",
        partner: 'CBC bank ',
        firstName: "Maurine",
        lastName: "Newton",
        status: "deactivated",
        email: "m.newton@gmail.com",
        transactionValue: "700,000,000",
    },
    {
        key: '3',
        appID: '000-9090',
        role: "user",
        partner: 'CBC bank ',
        firstName: "Maurine",
        lastName: "Newton",
        status: "deactivated",
        email: "m.newton@gmail.com",
        transactionValue: "700,000,000",

    },
    {
        key: '4',
        appID: '000-9090',
        partner: 'CBC bank ',
        firstName: "Maurine",
        role: "user",
        lastName: "Newton",
        status: "deactivated",
        email: "m.newton@gmail.com",
        transactionValue: "700,000,000",

    }, {
        dataIndex: "status",
        title: "Action",
        render: (action) => (
            <span> {action ?
                <button>Deactivate</button>
                :
                <button>Decline</button>}
</span>
        )
    },
];

const columns = [
    {
        dataIndex: "key",
        title: "S/N",

    },
    {
        dataIndex: "role",
        title: "Role",

    },{
        dataIndex: "firstName",
        title: "First Name",

    }, {
        dataIndex: "lastName",
        title: "Last Name",

    }
    , {
        dataIndex: "status",
        title: "Status",

    }

];

const User= (props) => (

    <div className="container">
        <div className={"justify-content-between d-flex margin-bottom-30"}>
            <div className={"fw-500"}>Number of Agents: <span className={"fs-28"}>10000</span></div>
            <button type="button" className="btn btn-primary" data-toggle="modal"
                    data-target=".bd-example-modal-lg">Create User
            </button>
        </div>
        <Table columns={columns} data={data}/>
        <Modal modalTitle={"Create a Agents"}>
            <div className={" d-flex flex-column margin-bottom-30 justify-content-center align-items-center"}>
                <form method={"post"} className={"md-7"}>
                    <div>
                        <label htmlFor={"contact"} className={"margin-top-15"}>Select User Role</label>
                        <select className={"basic-input"}  value={"default"}>
                            <option value={"default"} disabled>--Select User Role--</option>
                            <option value={"user"}>Admin </option>
                            <option value={"partner"}>Super Admin</option>
                        </select>
                    </div>
                    <div>
                        <label for={"fname"} className={"margin-top-15"}>First Name</label>
                        <Input className={""} type={"text"} value={""} onChange={() => {
                            console.log("changed")
                        }} name={"fname"} id={"email"}/>
                    </div>
 <div>
                        <label for={"lname"} className={"margin-top-15"}>Last Name</label>
                        <Input className={""} type={"text"} value={""} onChange={() => {
                            console.log("changed")
                        }} name={"lname"} id={"email"}/>
                    </div>
 <div>
                        <label for={"email"} className={"margin-top-15"}>Email</label>
                        <Input className={""} type={"text"} value={""} onChange={() => {
                            console.log("changed")
                        }} name={"name"} id={"email"}/>
                    </div>

                    <button className={"primary-button margin-top-30"}>Create User</button>
                </form>
            </div>
        </Modal>
    </div>
);

export default User;