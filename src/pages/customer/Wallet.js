import React from "react";
import Table from "../../components/Table";


const data = [
    {
        key: '1',
        walletName: 'John Brown',
        walletNumber: 3090999892,
        fintechName: 'Guaranty Trust Bank',
        type: 'Bank',
    },
    {
        key: '2',
        walletName: 'John Brown',
        walletNumber: 3090999892,
        fintechName: 'Guaranty Trust Bank',
        type: 'Fintech',
    },
    {
        key: '3',
        walletName: 'John Brown',
        walletNumber: 3090999892,
        fintechName: 'Guaranty Trust Bank',
        type: 'Bank',
    },
    {
        key: '4',
        walletName: 'John Brown',
        walletNumber: 3090999892,
        fintechName: 'Guaranty Trust Bank',
        type: 'Bank',
    },
];

const columns = [
    {
        dataIndex: "fintechName",
        title: "Institution",

    }, {
        dataIndex: "type",
        title: "Type",

    },
    {
        dataIndex: "walletName",
        title: "Wallet Name",


    },
    {
        dataIndex: "walletNumber",
        title: "Wallet Number",


    }
];

const Wallet = (props) => (

    <>
        <div className={"margin-bottom-30 fw-500"}>Number of Wallets: <span className={"fs-28"}>10000</span></div>
        <Table columns={columns} data={data}/>
    </>
);

export default Wallet;