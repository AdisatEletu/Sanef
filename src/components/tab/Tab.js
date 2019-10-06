import React from "react";
import "../../pages/dasboard/verification.css";
import PropTypes from "prop-types"

class Tab extends React.Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const {label, onClick} = this.props;
        onClick(label);
    }


    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;
        return (
            <>
                {
                    activeTab === label?
                        <div className={"active-tab"} onClick={()=>{onClick()}}>
                            {label}
                        </div>
                        :
                        <div className={'non-active-tab '}  onClick={()=>{onClick()}}>
                            {label}
                        </div>
                }
            </>
        )
    }
}

export default Tab;
