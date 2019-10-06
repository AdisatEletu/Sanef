import React from "react";
import propTypes from "prop-types"
import Tab from "./Tab";
import "./tab.css"
export default class Tabs extends React.Component {

    static propTypes = {
        children: propTypes.instanceOf(Array).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label
        }
    }


    onClickTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    };


    render() {
        const {onClickTab, props: {children}, state: {activeTab}} = this;
        return (
            <>
                <div className={"md-10 border-line d-flex"}>
                    {children.map((child) => {
                        const {label} = child.props;
                        return (
                            <Tab
                                onClick={onClickTab}
                                activeTab={activeTab}
                                label={label}
                                key={label}
                            />)
                    })}

                </div>
                <div className={"tab-content"}>
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </>
        )
    }
}