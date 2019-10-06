import React from "react";
import Table from "../../components/Table";


const data = [
    {
        key: '1',
        accountName: 'John Brown',
        accountNumber: 3090999892,
        Bank: 'Access Bank',
    },
    {
        key: '2',
        accountName: 'John Brown',
        accountNumber: 3090999892,
        Bank: 'Guaranty Trust Bank',
    },
    {
        key: '3',
        accountName: 'John Brown',
        accountNumber: 3090999892,
        Bank: 'Guaranty Trust Bank',
    },
    {
        key: '4',
        accountName: 'John Brown',
        accountNumber: 3090999892,
        Bank: 'Guaranty Trust Bank',
    },
];

const columns = [
    {
        dataIndex: "accountName",
        title: "Account Name",

    },
    {
        dataIndex: "accountNumber",
        title: "Account Number",

    },
    {
        dataIndex: "Bank",
        title: "Bank",

    }
];


const Account = (props) => (

    <>
        <div className={"margin-bottom-30 fw-500"}>Number of Accounts: <span className={"fs-28"}>10000</span></div>
        <Table columns={columns} data={data}/>
    </>
);

export default Account;