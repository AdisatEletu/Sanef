import React from "react";
import Table from "../../components/Table";

const data = [
    {
        key: '1',
        partnerID: '000-9090',
        partnerName: 'John Brown',
        transactionValue: "700,000,000",
    },
    {
        key: '2',
        partnerID: '000-9090',
        partnerName: 'John Brown',
        transactionValue: "700,000,000",
    },
    {
        key: '3',
        partnerID: '000-9090',
        partnerName: 'John Brown',
        transactionValue: "700,000,000",

    },
    {
        key: '4',
        partnerID: '000-9090',
        partnerName: 'John Brown',
        transactionValue: "700,000,000",

    },
];

const columns = [
    {
        dataIndex: "partnerID",
        title: "Agent ID",

    },
    {
        dataIndex: "partnerName",
        title: "Agent",

    },
    {
        dataIndex: "partnerName",
        title: "Partner",

    },
    {
        dataIndex: "transactionValue",
        title: "Value",

    }

];

const TopAgent = () => (
    <div className="container">
        <Table columns={columns} data={data}/>
    </div>
);

export default TopAgent;