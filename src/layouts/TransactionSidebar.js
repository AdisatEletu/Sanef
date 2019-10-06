import React from "react";

export default class TransactionSidebar extends React.Component{
    render() {
        return(
            <div className={"t-md-2 flex"}>
                {this.props.children}
            </div>
        )
    }}

