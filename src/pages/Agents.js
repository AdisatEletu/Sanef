import React from "react";
import Tabs from "../components/tab/Tabs";
import AgentTable from "./agent/Agents";
import AgentApproval from "./agent/AgentApproval";



const Agents = (props) => (

    <div className="container">
        <Tabs>
            <div label={"Approved Agents"}>
                <AgentTable/>
            </div>

            <div label={"Agent Requests"}>
                <AgentApproval/>
            </div>
        </Tabs>
        <div>

        </div>
    </div>
);

export default Agents;