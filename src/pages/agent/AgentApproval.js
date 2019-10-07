import React from "react";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import Input from "../../components/Input";


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
                <button>Approve</button>
                :
                <button>Decline</button>}
</span>
        )
    },{
        dataIndex: "deactivate",
        title: "Action",
        render: (action) => (
            <span> {action ?
                <button>Decline</button>
                :
                <button>activate</button>}
</span>
        )
    }

];


const AgentApproval = () => (
    <div className="container">
        <Table columns={columns} data={data}/>
    </div>
);

export default AgentApproval;
