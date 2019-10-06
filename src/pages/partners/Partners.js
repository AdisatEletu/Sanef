import React from "react";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import Input from "../../components/Input";


const data = [
    {
        key: '1',
        partnerID: '000-9090',
        partnerName: 'John Brown',
        email: 'JohnBrown@gmail.com',
        transactionNumber: 12090,
        transactionValue: "700,000,000",
        deactivate: true,
        delete: false
    },
    {
        key: '2',
        partnerID: '000-9090',
        partnerName: 'John Brown',
        email: 'JohnBrown@gmail.com',
        transactionNumber: 12090,
        transactionValue: "700,000,000",
        deactivate: true,
        delete: false
    },
    {
        key: '3',
        partnerID: '000-9090',
        partnerName: 'John Brown',
        email: 'JohnBrown@gmail.com',
        transactionNumber: 12090,
        transactionValue: "700,000,000",
        deactivate: true,
        delete: false

    },
    {
        key: '4',
        partnerID: '000-9090',
        partnerName: 'John Brown',
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
        title: "Partner ID",

    },
    {
        dataIndex: "partnerName",
        title: "Name",

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
                <button>deactivate</button>
                :
                <button>activate</button>}
            </span>
        )
    }

];


const Partners = () => (
    <div className="container">
        <div className={"justify-content-end d-flex margin-bottom-30"}>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Create Partner
            </button>
        </div>
        <Table columns={columns} data={data}/>
        <Modal modalTitle={"Create a Partner"}>
            <div>
                <label for={"name"}>Partner's Name</label>
                <Input className={""} type={"text"} value={""} onChange={() => {
                    console.log("changed")
                }} name={"name"} id={"name"}/>
            </div>
        <div>
                <label for={"address"}>Address</label>
                <Input className={""} type={"text"} value={""} onChange={() => {
                    console.log("changed")
                }} name={"name"} id={"address"}/>
            </div>
        <div>
                <label for={"phone"}>Phone Number</label>
                <Input className={""} type={"text"} value={""} onChange={() => {
                    console.log("changed")
                }} name={"name"} id={"phone"}/>
            </div>
        <div>
                <label for={"email"}>Email Address</label>
                <Input className={""} type={"text"} value={""} onChange={() => {
                    console.log("changed")
                }} name={"name"} id={"email"}/>
            </div>
        <div>
                <label for={"contact"}>Contact Person</label>
                <Input className={""} type={"text"} value={""} onChange={() => {
                    console.log("changed")
                }} name={"name"} id={"contact"}/>
            </div>
        </Modal>
    </div>
);

export default Partners;
