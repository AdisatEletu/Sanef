import React from "react";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Select from "../../components/Select";


const data = [
    {
        key: '1',
        partnerID: '000-9090',
        firstName: 'Moronke ',
        lastName: 'Brown',
        email: 'JohnBrown@gmail.com',
        transactionNumber: 12090,
        transactionValue: "700,000,000",
        deactivate: true,
        delete: false
    },
    {
        key: '2',
        partnerID: '000-9090',
        firstName: 'Moronke ',
        lastName: 'Brown',
        email: 'JohnBrown@gmail.com',
        transactionNumber: 12090,
        transactionValue: "700,000,000",
        deactivate: true,
        delete: false
    },
    {
        key: '3',
        partnerID: '000-9090',
        firstName: 'Juwon ',
        lastName: 'Brown',
        email: 'JohnBrown@gmail.com',
        transactionNumber: 12090,
        transactionValue: "700,000,000",
        deactivate: true,
        delete: false

    },
    {
        key: '4',
        partnerID: '000-9090',
        firstName: 'Moronke ',
        lastName: 'Brown',
        email: 'JohnBrown@gmail.com',
        transactionNumber: 12090,
        transactionValue: "700,000,000",
        deactivate: true,
        delete: false

    },
];

const columns = [
    {
        dataIndex: "partnerID",
        title: "Agents ID",

    },
    {
        dataIndex: "firstName",
        title: "First Name",

    },
    {
        dataIndex: "lastName",
        title: "Last Name",

    },
    {
        dataIndex: "email",
        title: "Email",

    }, {
        dataIndex: "transactionNumber",
        title: "Transaction Number",

    }, {
        dataIndex: "transactionValue",
        title: "Value",

    }, {
        dataIndex: "deactivate",
        title: "Action",
        render: (action) => (
            <span> {action ?
                <button>Deactivate</button>
                :
                <button>Decline</button>}
</span>
        )
    }, {
        dataIndex: "deactivate",
        title: "Action",
        render: (action) => (
            <span> {action ?
                <button>Delete</button>
                :
                <button>activate</button>}
</span>
        )
    }

];


const AgentTable = () => (
    <div className="container">
        <div className={"justify-content-between d-flex margin-bottom-30"}>
            <div className={"fw-500"}>Number of Agents: <span className={"fs-28"}>10000</span></div>
            <button type="button" className="btn btn-primary" data-toggle="modal"
                    data-target=".bd-example-modal-lg">Create Agents
            </button>
        </div>

        <Table columns={columns} data={data}/>

        <Modal modalTitle={"Create a Agents"}>
            <div className={" d-flex flex-column margin-bottom-30 justify-content-center align-items-center"}>
                <form method={"post"} className={"md-7"}>
                    <div className={"d-flex"}>
                        <div className={"md-5"}>
                            <label for={"fname"} className={"margin-top-15"}>First Name</label>
                            <Input className={""} type={"text"} value={""} onChange={() => {
                                console.log("changed")
                            }} name={"name"} id={"fname"}/>
                        </div>
                        <div className={"md-5"}>
                            <label for={"name"} className={"margin-top-15"}>Last Name</label>
                            <Input className={""} type={"text"} value={""} onChange={() => {
                                console.log("changed")
                            }} name={"name"} id={"name"}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor={"phone"} className={"margin-top-15"}>Phone Number</label>
                        <Input className={""} type={"text"} value={""} onChange={() => {
                            console.log("changed")
                        }} name={"name"} id={"phone"}/>
                    </div>
                    <div className={"d-flex"}>
                        <div className={"md-5"}>
                            <label for={"address"} className={"margin-top-15"}>State of residence</label>
                            <div className={""}>
                                <Select type={"text"} placeholder={"which identity do you have"}>
                                    <div data={"Lagos"} value={"i m a girl"}>
                                    </div>
                                    <div data={"Abuja"} value={"i m a girl"}>
                                    </div>
                                </Select>
                            </div>
                        </div>
                        <div className={"md-5"}>
                            <label for={"address"} className={"margin-top-15"}>LGA of residence</label>
                            <div className={""}>
                                <Select type={"text"} placeholder={"which identity do you have"}>
                                    <div data={"Hello"} value={"i m a girl"}>
                                    </div>
                                    <div data={"Hello"} value={"i m a girl"}>
                                    </div>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor={"contact"} className={"margin-top-15"}>Residential Address</label>
                        <Input className={""} type={"text"} value={""} onChange={() => {
                            console.log("changed")
                        }} name={"name"} id={"contact"}/>
                    </div>
                    <div>
                        <label for={"email"} className={"margin-top-15"}>Email Address (Optional)</label>
                        <Input className={""} type={"text"} value={""} onChange={() => {
                            console.log("changed")
                        }} name={"name"} id={"email"}/>
                    </div>

                    <button className={"primary-button margin-top-30"}>Create Agents</button>
                </form>
            </div>
        </Modal>
    </div>
);

export default AgentTable;
