import React from "react";
import PropTypes from "prop-types"

export default class Input extends React.Component{
    static propTypes = {
        className: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired
    }
    render() {
        const {value, type, style, id,onChange, name, placeholder} = this.props;
        return (
            <>
                <div className={"md-10"}>
                    <input type={type} id={id} value={value} name={name} placeholder={placeholder} className={"basic-input"} style={style} onChange={()=>{onChange()}}/>
                </div>
            </>
        );
    }
}

