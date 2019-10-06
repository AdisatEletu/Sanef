import React from "react";
import Header from "./Header";
import {Sidebar} from "./sidebar/Sidebar";

export default class DashboardLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="d-flex ">

                <div className={"width"}>
                    <Header title={"Verification"}/>

                </div>
                <div>
                    <Sidebar/>
                </div>
                <div className={"margin-top-100 margin-left-200 fullwidth"}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}