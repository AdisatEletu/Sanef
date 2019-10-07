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
            <button type="button" className="btn btn-primary" data-toggle="modal"
                    data-target=".bd-example-modal-lg">Create Partner
            </button>
        </div>

        <Table columns={columns} data={data}/>

        <Modal modalTitle={"Create a Partner"}>
            <div className={" d-flex flex-column margin-bottom-30 justify-content-center align-items-center"}>
                <form method={"post"} className={"md-7"}>
                    <div>
                        <label for={"name"} className={"margin-top-15"}>Partner's Name</label>
                        <Input className={""} type={"text"} value={""} onChange={() => {
                            console.log("changed")
                        }} name={"name"} id={"name"}/>
                    </div>
                    <div>
                        <label for={"address"} className={"margin-top-15"}>Address</label>
                        <Input className={""} type={"text"} value={""} onChange={() => {
                            console.log("changed")
                        }} name={"name"} id={"address"}/>
                    </div>
                    <div>
                        <label for={"phone"} className={"margin-top-15"}>Phone Number</label>
                        <Input className={""} type={"text"} value={""} onChange={() => {
                            console.log("changed")
                        }} name={"name"} id={"phone"}/>
                    </div>
                    <div>
                        <label for={"email"} className={"margin-top-15"}>Email Address</label>
                        <Input className={""} type={"text"} value={""} onChange={() => {
                            console.log("changed")
                        }} name={"name"} id={"email"}/>
                    </div>
                    <div>
                        <label for={"contact"} className={"margin-top-15"}>Contact Person</label>
                        <Input className={""} type={"text"} value={""} onChange={() => {
                            console.log("changed")
                        }} name={"name"} id={"contact"}/>
                    </div>
                    <button className={"primary-button margin-top-30"}>Create Partner</button>
                </form>
            </div>
        </Modal>
    </div>
);

export default Partners;
