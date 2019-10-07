import React from "react";
import Tabs from "../components/tab/Tabs";
import AgentTable from "./agent/Agents";
import AgentApproval from "./agent/AgentApproval";



class Agents extends React.Component {
    constructor(props){
        super(props);
        this.state={
            click: false
        }
    }

    componentDidMount() {

    }

    onClick=()=>{
        this.setState({
            modalActive: true
        })
    }
    render() {
        return(
            <div className="container">
                <Tabs>
                    <div label={"Approved Agents"}>
                        <AgentTable onClick = {this.onClick}/>
                    </div>

                    <div label={"Agent Requests"}>
                        <AgentApproval/>
                    </div>
                </Tabs>
                <div>

                </div>
            </div>
        )
    }
}
export default Agents;