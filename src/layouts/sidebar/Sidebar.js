import React from "react";
import "./sidebar.css"
import {NavLink} from "react-router-dom";

export const Sidebar = props => {

    return (
        <div className="p-wrapper">
            <div className="d-flex flex-column p-sidebar">
                <NavLink to={"/home"}>
                    <div className={"p-links d-flex align-items-center justify-content-center"}>
                        <img src={require("../../assets/SANEF.png")} alt={"logo"} width={70}/>
                    </div>
                </NavLink>

                <NavLink to={"/dashboard"} activeClassName="p-active-link">
                    <div className={"p-links d-flex"}>
                        <span className={"p-link-text"}>Dashboard</span>
                    </div>
                </NavLink>

                <NavLink to={"/customers"} activeClassName="p-active-link">
                    <div className={"p-links d-flex"}>
                        <span className={"p-link-text"}>Customers</span>
                    </div>
                </NavLink>
                <NavLink to={"/partners"} activeClassName="p-active-link">
                    <div className={"p-links d-flex "}>
                        <span className={"p-link-text"}>Partners</span>
                    </div>
                </NavLink>
                <NavLink to={"/agents"} activeClassName="p-active-link">
                    <div className={"p-links d-flex "}>
                        <span className={"p-link-text"}>Agents</span>
                    </div>
                </NavLink>
                <NavLink to={"/applications"} activeClassName="p-active-link">
                    <div className={"p-links d-flex align-items-center"}>
                        <span className={"p-link-text"}>Applications</span>
                    </div>
                </NavLink>
                <NavLink to={"/user"} activeClassName="p-active-link">
                    <div className={"p-links d-flex align-items-center"}>
                        <span className={"p-link-text"}>User Management</span>
                    </div>
                </NavLink>
                <NavLink to={"/reporting"} activeClassName="p-active-link">
                    <div className={"p-links d-flex align-items-center"}>
                        <span className={"p-link-text"}>Reporting </span>
                    </div>
                </NavLink>
            </div>
            <div className={" d-flex align-items-center margin-top-auto margin-bottom-50"}>
                <span className={"p-user d-flex justify-content-center align-items-center"}> BE</span>
            </div>
        </div>
    )
};