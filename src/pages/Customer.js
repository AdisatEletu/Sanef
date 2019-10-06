import React from "react";
import Table from "../components/Table";
import Tabs from "../components/tab/Tabs";
import Wallet from "./customer/Wallet";
import Account from "./customer/account";



const Customer = (props) => (

    <div className="container">
        <Tabs>
            <div label={"Accounts"}>
              <Account/>
            </div>

            <div label={"Wallets"}>
                <Wallet/>
            </div>
        </Tabs>
        <div>

        </div>
    </div>
);

export default Customer;